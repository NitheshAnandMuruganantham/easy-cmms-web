import { Box, Button, Switch, Typography } from "@mui/material";
import {
  DataGrid,
  GridAddIcon,
  GridPanel,
  GridToolbar,
} from "@mui/x-data-grid";
import AssessmentIcon from "@mui/icons-material/Assessment";
import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import {
  SortOrder,
  useMachineCatagoriesCountQuery,
  useMachineCatagoriesQuery,
  useRemoveMachineCatagoriesMutation,
} from "../../generated";
import { filterTransform } from "../../utils/filterTransform";
import columns from "./cols";
import NewMaintance from "./newCatagory";
import Reports from "./reports";
import { toast } from "react-toastify";
import { client } from "../../utils/apollo";

function Machine_category() {
  const [page, setPage] = useState(1);
  const [showReport, setShowReport] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState(10);
  const [filter, SetFilter] = useState<any>({
    items: [],
  });
  const [formattedFilter, SetFormattedFilter] = useState<any>({});
  const [formattedSort, setFormattedSort] = useState<any>({});
  const [sort, setSort] = useState<any>([
    {
      field: "created_at",
      sort: "desc",
    },
  ]);

  const [newCategory, setNewCategory] = useState<boolean>(false);

  const {
    data: machines,
    error: GetMachineError,
    loading: GetMachineLoading,
    refetch: RefetchMaintenances,
    startPolling: startPollingMaintenances,
    stopPolling: stopPollingMaintenances,
  } = useMachineCatagoriesQuery({
    variables: {
      skip: (page - 1) * pageSize,
      take: pageSize,
      where: formattedFilter,
    },
  });
  const {
    data: MachinesCount,
    error: MachineCountError,
    loading: MachineCountLoading,
    refetch: RefetchMaintenanceCount,
    startPolling: startPollingMaintenancesCount,
    stopPolling: stopPollingMaintenancesCount,
  } = useMachineCatagoriesCountQuery({
    variables: {
      where: formattedFilter,
    },
  });
  const [DeleteCategory] = useRemoveMachineCatagoriesMutation();

  useEffect(() => {
    startPollingMaintenances(10000);
    startPollingMaintenancesCount(10000);
    return () => {
      stopPollingMaintenances();
      stopPollingMaintenancesCount();
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
      <NewMaintance
        open={newCategory}
        close={(refetch: boolean) => {
          setNewCategory(false);
          if (refetch) {
            RefetchMaintenanceCount();
            RefetchMaintenances();
            client.refetchQueries({
              include: ["MeachineCatagoryDropdown"],
            });
          }
        }}
      />
      <Box flex={1}>
        <Button
          onClick={() => {
            setNewCategory(true);
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
          New category
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
        rows={machines?.machineCatagories || []}
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
        rowCount={MachinesCount?.machineCatagoriesCount || 0}
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
                          await DeleteCategory({
                            variables: {
                              removeMachineCatagoriesId: params.row.id,
                            },
                          })
                            .then((res) => {
                              if (res.data?.removeMachineCatagories) {
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
                            include: ["blockDropdown"],
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

export default Machine_category;
