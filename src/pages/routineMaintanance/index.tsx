import { Box, Button, Switch, Typography } from "@mui/material";
import {
  DataGrid,
  GridAddIcon,
  GridPanel,
  GridToolbar,
} from "@mui/x-data-grid";
import AssessmentIcon from "@mui/icons-material/Assessment";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { confirmAlert } from "react-confirm-alert";
import {
  InputMaybe,
  MaintenanceWhereInput,
  SortOrder,
  useDeleteMaintananceMutation,
  useRemoveRoutineMaintananceMutation,
  useRoutineMaintanancesCountQuery,
  useRoutineMaintanancesQuery,
} from "../../generated";
import { filterTransform } from "../../utils/filterTransform";
import columns from "./cols";
import ViewMaintance from "./viewMaintanance";
import NewMaintance from "./newMaintenance";

function RoutineMaintenance() {
  const [page, setPage] = useState(1);
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

  const {
    data: maintenances,
    error: GetMaintenanceError,
    loading: GetMaintenanceLoading,
    refetch: RefetchMaintenances,
  } = useRoutineMaintanancesQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
      where: formattedFilter,
      orderBy: formattedSort,
    },
  });
  const {
    data: MaintenancesCount,
    error: MaintenancesCountError,
    loading: MaintenancesCountLoading,
    refetch: RefetchMaintenanceCount,
  } = useRoutineMaintanancesCountQuery({
    variables: {
      where: formattedFilter,
    },
  });
  const [DeleteRoutineMaintenance] = useRemoveRoutineMaintananceMutation();

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
          New Routine Maintenance
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
        error={GetMaintenanceError || MaintenancesCountError}
        disableSelectionOnClick
        rowsPerPageOptions={[10, 20, 50, 100]}
        disableColumnMenu
        components={{
          Toolbar: GridToolbar,
        }}
        loading={GetMaintenanceLoading || MaintenancesCountLoading}
        onPageChange={(p) => setPage(p + 1)}
        filterModel={filter}
        onFilterModelChange={(f) => {
          SetFilter(f);
          SetFormattedFilter({
            AND: filterTransform(f),
          });
        }}
        onPageSizeChange={(s) => setPageSize(s)}
        rows={maintenances?.routineMaintanances || []}
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
        rowCount={MaintenancesCount?.routineMaintanancesCount || 0}
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
                          await DeleteRoutineMaintenance({
                            variables: {
                              removeRoutineMaintananceId: params.row.id,
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

export default RoutineMaintenance;
