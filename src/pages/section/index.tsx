import { Box, Button, Switch, Typography } from "@mui/material";
import { DataGrid, GridAddIcon, GridToolbar } from "@mui/x-data-grid";
import AssessmentIcon from "@mui/icons-material/Assessment";
import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import {
  InputMaybe,
  SectionsWhereInput,
  SortOrder,
  useRemoveSectionMutation,
  useSectionsCountQuery,
  useSectionsQuery,
} from "../../generated";
import { filterTransform } from "../../utils/filterTransform";
import columns from "./cols";
import NewSection from "./newSection";
import Reports from "./reports";
import { toast } from "react-toastify";
import { client } from "../../utils/apollo";

function Section() {
  const [page, setPage] = useState(1);
  const [showReport, setShowReport] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState(10);
  const [filter, SetFilter] = useState<any>({
    items: [],
  });
  const [showViewMaintanceModal, setShowViewMaintanceModal] = useState<{
    open: boolean;
    rowId: number;
  }>({
    rowId: 1,
    open: false,
  });
  const [formattedFilter, SetFormattedFilter] = useState<
    InputMaybe<SectionsWhereInput>
  >({});
  const [formattedSort, setFormattedSort] = useState<any>({
    id: SortOrder.Desc,
  });
  const [onlyUnResolved, setUnResolvedView] = useState<boolean>(false);
  const [sort, setSort] = useState<any>([
    {
      field: "id",
      sort: "desc",
    },
  ]);

  const [newMaintenance, setNewMaintenance] = useState<boolean>(false);

  const {
    data: machines,
    error: GetMachineError,
    loading: GetMachineLoading,
    refetch: RefetchMaintenances,
    startPolling: startPollingMaintenances,
    stopPolling: stopPollingMaintenances,
  } = useSectionsQuery({
    variables: {
      skip: (page - 1) * pageSize,
      take: pageSize,
      where: formattedFilter,
      orderBy: formattedSort,
    },
  });
  const {
    data: MachinesCount,
    error: MachineCountError,
    loading: MachineCountLoading,
    refetch: RefetchMaintenanceCount,
    startPolling: startPollingMaintenanceCount,
    stopPolling: stopPollingMaintenanceCount,
  } = useSectionsCountQuery({
    variables: {
      where: formattedFilter,
    },
  });
  const [DeleteSection] = useRemoveSectionMutation();
  useEffect(() => {
    startPollingMaintenanceCount(10000);
    startPollingMaintenances(10000);
    return () => {
      stopPollingMaintenanceCount();
      stopPollingMaintenances();
    };
  }, []);

  return (
    <div>
      <Reports
        open={showReport}
        close={() => {
          setShowReport(false);
        }}
      />
      <NewSection
        open={newMaintenance}
        close={(refetch: boolean) => {
          setNewMaintenance(false);
          if (refetch) {
            RefetchMaintenanceCount();
            RefetchMaintenances();
            client.refetchQueries({
              include: ["sectionsDropdown"],
            });
          }
        }}
      />
      <Box flex={1}>
        <Button
          onClick={() => {
            setNewMaintenance(true);
          }}
          color="info"
          endIcon={<GridAddIcon />}
          style={{
            marginBottom: 10,
            marginRight: 10,
          }}
          size="small"
          variant="contained"
        >
          New Section
        </Button>
        <Button
          color="secondary"
          size="small"
          endIcon={<AssessmentIcon />}
          style={{
            marginRight: 10,
            marginBottom: 10,
          }}
          onClick={() => {
            setShowReport(true);
          }}
          variant="contained"
        >
          Generate Report
        </Button>
      </Box>

      <DataGrid
        filterMode="server"
        sortingMode="server"
        paginationMode="server"
        autoHeight
        logLevel="debug"
        error={GetMachineError || MachineCountError}
        disableSelectionOnClick
        rowsPerPageOptions={[10, 20, 50, 100]}
        disableColumnMenu
        components={{
          Toolbar: GridToolbar,
        }}
        loading={GetMachineLoading || MachineCountLoading}
        onPageChange={(p) => setPage(p + 1)}
        filterModel={filter}
        onFilterModelChange={(f) => {
          SetFilter(f);
          SetFormattedFilter({
            AND: filterTransform(f),
          });
        }}
        onPageSizeChange={(s) => setPageSize(s)}
        rows={machines?.sections || []}
        sortModel={sort}
        onSortModelChange={(s) => {
          setSort(s);
          if (s.length === 0) {
            setFormattedSort({});
            return;
          }
          setFormattedSort({
            [s[0].field]: s[0].sort === "asc" ? SortOrder.Asc : SortOrder.Desc,
          });
        }}
        rowCount={MachinesCount?.sectionsCount || 0}
        columns={[
          ...columns,
          {
            field: "delete",
            flex: 0.75,
            headerName: "",
            sortable: false,
            renderCell: (params) => (
              <Button
                onClick={() => {
                  confirmAlert({
                    title: "Confirm to submit",
                    message: "Are you sure to do this.",
                    buttons: [
                      {
                        label: "Yes",
                        onClick: async () => {
                          await DeleteSection({
                            variables: {
                              removeSectionId: parseInt(params.row.id, 10),
                            },
                          })
                            .then((res) => {
                              if (res.data?.removeSection) {
                                toast.success("Deleted Successfully");
                              }
                            })
                            .catch((e) => {
                              toast.error(
                                "Failed to delete some data depend on it"
                              );
                            });
                          RefetchMaintenanceCount();
                          RefetchMaintenances();
                          client.refetchQueries({
                            include: ["sectionsDropdown"],
                          });
                        },
                      },
                      {
                        label: "No",
                        onClick: () => {},
                      },
                    ],
                  });
                }}
                color="error"
                variant="contained"
                size="small"
              >
                DELETE
              </Button>
            ),
          },
        ]}
        pageSize={pageSize}
      />
    </div>
  );
}

export default Section;
