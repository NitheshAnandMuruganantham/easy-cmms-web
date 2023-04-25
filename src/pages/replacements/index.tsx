import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import {
  InputMaybe,
  SectionsWhereInput,
  SortOrder,
  useGetAllReplacementsCountQuery,
  useGetAllReplacementsQuery,
  useRemoveItemCatagoryMutation,
  useUpdateReplacementMutation,
} from "../../generated";
import { filterTransform } from "../../utils/filterTransform";
import columns from "./cols";
import Reports from "./reports";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
function Replacements() {
  const [page, setPage] = useState(1);
  const [showReport, setShowReport] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState(10);
  const [filter, SetFilter] = useState<any>({
    items: [],
  });

  const [approveLoading, setApproveLoading] = useState(false);

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

  const [updateCatagory] = useUpdateReplacementMutation();
  const {
    data: catagories,
    error: GetDataError,
    loading: GetDataLoading,
    refetch: RefetchMaintenances,
    startPolling: startPollingMaintenances,
    stopPolling: stopPollingMaintenances,
  } = useGetAllReplacementsQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
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
  } = useGetAllReplacementsCountQuery({
    variables: {
      where: formattedFilter,
    },
  });
  useEffect(() => {
    startPollingMaintenanceCount(10000);
    startPollingMaintenances(10000);
    return () => {
      stopPollingMaintenanceCount();
      stopPollingMaintenances();
    };
  }, []);

  const refetch = () => {
    RefetchMaintenances();
    RefetchMaintenanceCount();
  };

  const approveReplacement = (id: number) => {
    setApproveLoading(true);
    updateCatagory({
      variables: {
        updateReplacementId: id,
        updateReplacementInput: {
          approved: {
            set: true,
          },
        },
      },
    }).then(() => {
      refetch();
    });
    setApproveLoading(false);
  };

  useEffect(() => {
    if (onlyUnResolved) {
      SetFormattedFilter({
        AND: [
          {
            approved: {
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
      <DataGrid
        filterMode="server"
        sortingMode="server"
        paginationMode="server"
        autoHeight
        logLevel="debug"
        error={GetDataError || MachineCountError}
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
                  only un-approved
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
        loading={GetDataLoading || MachineCountLoading}
        onPageChange={(p) => setPage(p + 1)}
        filterModel={filter}
        onFilterModelChange={(f) => {
          SetFilter(f);
          SetFormattedFilter({
            AND: filterTransform(f),
          });
        }}
        onPageSizeChange={(s) => setPageSize(s)}
        rows={catagories?.replacements || []}
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
        rowCount={MachinesCount?.replacementsCount || 0}
        columns={[
          {
            field: "actions",
            width: 150,
            headerName: "",
            sortable: false,
            renderCell: (params) => {
              return (
                <Button
                  disabled={
                    approveLoading ||
                    params?.row?.approved ||
                    params?.row?.item?.quantity < params?.row?.quantity
                  }
                  onClick={() => {
                    approveReplacement(params.row.id);
                  }}
                  color={"success"}
                  variant="contained"
                  size="small"
                >
                  {approveLoading ? (
                    <CircularProgress />
                  ) : params?.row?.item?.quantity < params?.row?.quantity ? (
                    "LOW INVENTORY"
                  ) : (
                    "APPROVE"
                  )}
                </Button>
              );
            },
          },
          ...columns,
        ]}
        pageSize={pageSize}
      />
    </div>
  );
}

export default Replacements;
