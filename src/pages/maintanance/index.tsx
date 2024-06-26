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

import { filterTransform } from "../../utils/filterTransform";
import columns from "./cols";
import ViewMaintance from "./viewMaintanance";
import NewMaintance from "./newMaintenance";
import Reports from "./reports";
import { useMutation, useQuery } from "react-query";
import { useInterval } from "../../utils/reFetchQueries";
import EditMaintenance from "./editMaintenance";
import {
  DeleteMaintenance,
  GetAllMaintenance,
  GetAllMaintenanceCount,
} from "../../services/mainanance";

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
  const [formattedFilter, SetFormattedFilter] = useState<any>({});
  const [formattedSort, setFormattedSort] = useState<any>({
    id: "desc",
  });
  const [onlyUnResolved, setUnResolvedView] = useState<boolean>(false);
  const [sort, setSort] = useState<any>([
    {
      field: "id",
      sort: "desc",
    },
  ]);

  const [newMaintance, setNewMaintance] = useState<boolean>(false);

  const {
    data: MaintenancesCount,
    error: MaintenancesCountError,
    isLoading: MaintenancesCountLoading,
    refetch: RefetchMaintenanceCount,
  } = useQuery({
    queryKey: "maintenanceCount",
    queryFn: () =>
      GetAllMaintenanceCount(
        formattedFilter,
        pageSize,
        (page - 1) * pageSize,
        formattedSort
      ),
  });

  const { mutate: delMaintance } = useMutation({
    mutationKey: "deleteMaintenance",
    mutationFn: (id: number) => DeleteMaintenance(id),
  });

  const {
    data: maintenances,
    isLoading: maintenanceLoading,
    refetch: RefetchMaintenances,
  } = useQuery({
    queryKey: "maintenance",
    queryFn: () =>
      GetAllMaintenance(
        formattedFilter,
        pageSize,
        (page - 1) * pageSize,
        formattedSort
      ),
  });

  const [showEditMaintenance, setShowEditMaintenance] = useState<{
    open: boolean;
    data: any;
  }>({
    open: false,
    data: null,
  });

  useInterval(() => {
    RefetchMaintenanceCount();
    RefetchMaintenances();
  }, 10000);

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
      <EditMaintenance
        close={(refetch) => {
          if (refetch) {
            RefetchMaintenances();
          }
          setShowEditMaintenance({
            open: false,
            data: null,
          });
        }}
        open={showEditMaintenance.open}
        data={showEditMaintenance.data}
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
        rows={maintenances?.data || []}
        sortModel={sort}
        onSortModelChange={(s) => {
          setSort(s);
          if (s.length === 0) {
            setFormattedSort({});
            return;
          }
          setFormattedSort({
            [s[0].field]: s[0].sort === "asc" ? "asc" : "desc",
          });
        }}
        rowCount={MaintenancesCount?.data || 0}
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
                          await delMaintance(params.row.id);
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
