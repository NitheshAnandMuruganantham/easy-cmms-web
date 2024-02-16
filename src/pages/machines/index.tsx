import { Box, Button } from "@mui/material";
import { DataGrid, GridAddIcon, GridToolbar } from "@mui/x-data-grid";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import {
  InputMaybe,
  MachinesWhereInput,
  SortOrder,
  useMachinesCountQuery,
  useMachinesQuery,
  useRemoveMachineMutation,
} from "../../generated";
import { filterTransform } from "../../utils/filterTransform";
import columns from "./cols";
import NewMaintance from "./newMeachine";
import Reports from "./reports";
import { toast } from "react-toastify";
import { client } from "../../utils/apollo";
import { useInterval } from "../../utils/reFetchQueries";
import EditMachine from "./editMeachine";

function Machines() {
  const [page, setPage] = useState(1);
  const [showReport, setShowReport] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState(10);
  const [filter, SetFilter] = useState<any>({
    items: [],
  });

  const [formattedFilter, SetFormattedFilter] = useState<
    InputMaybe<MachinesWhereInput>
  >({});
  const [formattedSort, setFormattedSort] = useState<any>({
    id: SortOrder.Desc,
  });
  const [sort, setSort] = useState<any>([
    {
      field: "id",
      sort: "asc",
    },
  ]);

  const [showNewMachine, setShowNewMachine] = useState<boolean>(false);
  const [showEditMaintenance, setShowEditMaintenance] = useState<{
    open: boolean;
    data: any;
  }>({
    open: false,
    data: null,
  });

  const {
    data: MachinesCount,
    error: MachineCountError,
    loading: MachineCountLoading,
    refetch: RefetchMaintenanceCount,
  } = useMachinesCountQuery({
    variables: {
      where: formattedFilter,
    },
  });
  const [DeleteMachine] = useRemoveMachineMutation();

  const {
    data,
    refetch: RefetchMaintenances,
    loading: GetMachineLoading,
  } = useMachinesQuery({
    variables: {
      where: formattedFilter,
      orderBy: formattedSort,
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });

  useInterval(() => {
    RefetchMaintenanceCount();
    RefetchMaintenances();
  }, 10000);

  return (
    <div>
      <Reports
        open={showReport}
        close={() => {
          setShowReport(false);
        }}
      />
      <NewMaintance
        open={showNewMachine}
        close={(refetch: boolean) => {
          setShowNewMachine(false);
          if (refetch) {
            RefetchMaintenanceCount();
            RefetchMaintenances();
            client.refetchQueries({
              include: ["getAllMachinesDropdown"],
            });
          }
        }}
      />
      <EditMachine
        open={showEditMaintenance.open}
        close={(refetch: boolean) => {
          setShowEditMaintenance({
            open: false,
            data: null,
          });
          if (refetch) {
            RefetchMaintenanceCount();
            RefetchMaintenances();
          }
        }}
        data={showEditMaintenance.data}
      />

      <Box flex={1}>
        <Button
          onClick={() => {
            setShowNewMachine(true);
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
          New Machine
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
        error={MachineCountError}
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
        rows={data?.machines || []}
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
        rowCount={MachinesCount?.machinesCount || 0}
        columns={[
          ...columns,
          {
            field: "edit",
            headerName: "",
            flex: 0.75,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
              <Button
                onClick={() => {
                  setShowEditMaintenance({
                    open: true,
                    data: params.row,
                  });
                }}
                variant="contained"
                size="small"
              >
                Edit
              </Button>
            ),
          },

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
                          await DeleteMachine({
                            variables: {
                              removeMachineId: params.row.id,
                            },
                          })
                            .then((res) => {
                              if (res.data?.removeMachine) {
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
                            include: ["getAllMachinesDropdown"],
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

export default Machines;
