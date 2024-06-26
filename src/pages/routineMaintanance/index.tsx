import { Box, Button } from "@mui/material";
import { DataGrid, GridAddIcon, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import {
  InputMaybe,
  MaintenanceWhereInput,
  SortOrder,
  useRemoveRoutineMaintananceMutation,
  useRoutineMaintanancesCountQuery,
  useRoutineMaintanancesQuery,
} from "../../generated";
import { filterTransform } from "../../utils/filterTransform";
import columns from "./cols";
import ViewMaintance from "./viewMaintanance";
import NewMaintance from "./newMaintenance";
import { useInterval } from "../../utils/reFetchQueries";
import EditMaintenance from "./editMaintenance";

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
  const [formattedFilter, SetFormattedFilter] =
    useState<InputMaybe<MaintenanceWhereInput>>();
  const [formattedSort, setFormattedSort] = useState<any>({
    id: SortOrder.Desc,
  });
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
    loading: MaintenancesCountLoading,
    refetch: RefetchMaintenanceCount,
    startPolling: startPollingMaintenanceCount,
    stopPolling: stopPollingMaintenanceCount,
  } = useRoutineMaintanancesCountQuery({
    variables: {
      where: formattedFilter,
    },
  });
  const [DeleteRoutineMaintenance] = useRemoveRoutineMaintananceMutation();
  const [showEdit, setShowEdit] = useState<{
    open: boolean;
    id: number;
    data: any;
  }>({
    open: false,
    id: 0,
    data: null,
  });

  const {
    data: Maintenances,
    loading: GetMaintenanceLoading,
    refetch: RefetchMaintenances,
  } = useRoutineMaintanancesQuery({
    variables: {
      where: formattedFilter,
      orderBy: formattedSort,
      limit: pageSize,
      offset: (page - 1) * pageSize,
    },
  });
  useInterval(() => {
    RefetchMaintenanceCount();
    RefetchMaintenances();
  }, 10000);

  useEffect(() => {
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
    SetFormattedFilter({
      AND: filterTransform(filter),
    });
  }, [filter]);

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
      <EditMaintenance
        data={showEdit.data}
        close={(refetch) => {
          if (refetch) {
            RefetchMaintenances();
            RefetchMaintenanceCount();
          }
          setShowEdit({
            open: false,
            id: 0,
            data: null,
          });
        }}
        open={showEdit.open}
        id={showEdit.id}
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
        error={MaintenancesCountError}
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
        rows={Maintenances?.routineMaintanances || []}
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
            field: "view",
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
            field: "update",
            headerName: "",
            flex: 0.75,
            sortable: false,
            renderCell: (params) => (
              <Button
                onClick={() => {
                  setShowEdit({
                    open: true,
                    id: params.row.id,
                    data: params.row,
                  });
                }}
                variant="contained"
                size="small"
              >
                re-assign
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
