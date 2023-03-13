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
  InputMaybe,
  MaintenanceWhereInput,
  SortOrder,
  useDeleteMaintananceMutation,
  useMaintanceCountQuery,
  useMaintenanceQuery,
} from "../../generated";
import { filterTransform } from "../../utils/filterTransform";
import columns from "./cols";
import ViewMaintance from "./viewMaintanance";
import NewMaintance from "./newMaintenance";
import Reports from "./reports";
import { useQuery } from "react-query";
import axios from "../../utils/axios";
import { useInterval } from "../../utils/reFetchQueries";

const fortmatResponse = (res: any) => {
  return JSON.stringify(res, null, 2);
};

function Maintenance() {
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
    InputMaybe<MaintenanceWhereInput>
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
  const [maintenanceLoading, setGetMaintenanceLoading] =
    useState<boolean>(false);
  const [maintenances, setMaintenances] = useState<any[]>([]);

  const {
    data: MaintenancesCount,
    error: MaintenancesCountError,
    loading: MaintenancesCountLoading,
    refetch: RefetchMaintenanceCount,
    startPolling: StartPollingMaintenanceCount,
    stopPolling: StopPollingMaintenanceCount,
  } = useMaintanceCountQuery({
    variables: {
      where: formattedFilter,
    },
  });
  const [DeleteMaintenance] = useDeleteMaintananceMutation();

  const RefetchMaintenances = () => {
    RefetchMaintenanceCount();
    setGetMaintenanceLoading(true);
    axios
      .post("maintenance", {
        take: pageSize,
        skip: (page - 1) * pageSize,
        where: formattedFilter,
        orderBy: formattedSort,
      })
      .then((res) => {
        setMaintenances(res.data);
        setGetMaintenanceLoading(false);
      });
  };

  useInterval(() => {
    RefetchMaintenanceCount();
    axios
      .post("maintenance", {
        take: pageSize,
        skip: (page - 1) * pageSize,
        where: formattedFilter,
        orderBy: formattedSort,
      })
      .then((res) => {
        setMaintenances(res.data);
      });
  }, 10000);

  useEffect(() => {
    RefetchMaintenances();
  }, []);

  useEffect(() => {
    RefetchMaintenances();
  }, [page, pageSize, formattedFilter, formattedSort]);

  useEffect(() => {
    if (onlyUnResolved) {
      SetFormattedFilter({
        AND: [
          {
            resolved: {
              equals: false,
            },
          },
          ...filterTransform(filter),
        ],
      });
    } else {
      SetFormattedFilter({
        AND: filterTransform(filter),
      });
    }
  }, [onlyUnResolved, filter]);
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
          New Maintenance
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
      <ViewMaintance
        rowId={showViewMaintanceModal.rowId}
        open={showViewMaintanceModal.open}
        close={() => {
          setShowViewMaintanceModal({
            open: false,
            rowId: showViewMaintanceModal.rowId,
          });
        }}
      />
      <DataGrid
        filterMode="server"
        sortingMode="server"
        paginationMode="server"
        autoHeight
        logLevel="debug"
        error={MaintenancesCountError}
        disableSelectionOnClick
        rowsPerPageOptions={[10, 20, 50, 100]}
        disableColumnMenu
        components={{
          Toolbar: () => (
            <div
              style={{
                display: "flex",
              }}
            >
              <GridToolbar />
              <div
                style={{
                  marginTop: "2px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="button"
                  color="steelblue"
                  style={{
                    marginLeft: 10,
                    marginRight: 5,
                  }}
                >
                  only un-resolved
                </Typography>
                <Switch
                  checked={onlyUnResolved}
                  onChange={(e) => {
                    setUnResolvedView(e.target.checked);
                  }}
                />
              </div>
            </div>
          ),
        }}
        loading={maintenanceLoading || MaintenancesCountLoading}
        onPageChange={(p) => setPage(p + 1)}
        filterModel={filter}
        onFilterModelChange={(f) => {
          SetFilter(f);
          SetFormattedFilter({
            AND: filterTransform(f),
          });
        }}
        onPageSizeChange={(s) => setPageSize(s)}
        rows={maintenances || []}
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
        rowCount={MaintenancesCount?.maintenanceCount || 0}
        columns={[
          ...columns,
          {
            field: "view ticket",
            headerName: "",
            flex: 0.75,
            sortable: false,
            renderCell: (params) => (
              <Button
                onClick={() => {
                  setShowViewMaintanceModal({
                    open: true,
                    rowId: params.row.id,
                  });
                }}
                variant="contained"
                size="small"
              >
                View
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
                          await DeleteMaintenance({
                            variables: {
                              removeMaintananceId: params.row.id,
                            },
                          });
                          RefetchMaintenanceCount();
                          RefetchMaintenances();
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
