import { Box, Button, Switch, Typography } from "@mui/material";
import {
  DataGrid,
  GridAddIcon,
  GridPanel,
  GridToolbar,
} from "@mui/x-data-grid";
import AssessmentIcon from "@mui/icons-material/Assessment";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import {
  InputMaybe,
  MachinesWhereInput,
  MaintenanceWhereInput,
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
import axios from "../../utils/axios";

function Maintenance() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<any>([]);
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
    InputMaybe<MachinesWhereInput>
  >({});
  const [formattedSort, setFormattedSort] = useState<any>({});
  const [onlyUnResolved, setUnResolvedView] = useState<boolean>(false);
  const [sort, setSort] = useState<any>([
    {
      field: "created_at",
      sort: "asc",
    },
  ]);

  const [newMaintance, setNewMaintance] = useState<boolean>(false);
  const [GetMachineLoading, setGetMachineLoading] = useState<boolean>(false);

 
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

  const RefetchMaintenances = () => {
    setGetMachineLoading(true);
    axios.get('machines',{
      params:{
        limit: pageSize,
        offset: (page - 1) * pageSize,
        where: formattedFilter,
        orderBy: formattedSort,
      }
    }).then(res => {
      setData(res.data);
      setGetMachineLoading(false);
    });
  };

  useEffect(() => {
    setGetMachineLoading(true);
    axios.post('machines',{
        take: pageSize,
        skip: (page - 1) * pageSize,
        where: formattedFilter,
        orderBy: formattedSort,
    }).then(res => {
      setData(res.data);
      setGetMachineLoading(false);
    });
  }, [page, pageSize, formattedFilter, formattedSort])

  return (
    <div>
      <Reports
        open={showReport}
        close={() => {
          setShowReport(false);
        }}
      />
      <NewMaintance
        open={newMaintance}
        close={(refetch: boolean) => {
          setNewMaintance(false);
          if (refetch) {
            RefetchMaintenanceCount();
            RefetchMaintenances();
            client.refetchQueries({
              include: ["getAllMachinesDropdown"],
            });
          }
        }}
      />
      <Box flex={1}>
        <Button
          onClick={() => {
            setNewMaintance(true);
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
        error={ MachineCountError}
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
        rows={data || []}
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

export default Maintenance;
