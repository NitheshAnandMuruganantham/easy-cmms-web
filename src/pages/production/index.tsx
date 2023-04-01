import { Box, Button, Switch, Typography } from "@mui/material";
import {
  DataGrid,
  GridAddIcon,
  GridPanel,
  GridToolbar,
} from "@mui/x-data-grid";
import AssessmentIcon from "@mui/icons-material/Assessment";
import React, { useContext, useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import {
  SortOrder,
  useMachineCatagoriesCountQuery,
  useMachineCatagoriesQuery,
  useProductionDataCountQuery,
  useProductionDataQuery,
  useRemoveProductionDataMutation,
} from "../../generated";
import { filterTransform } from "../../utils/filterTransform";
import columns from "./cols";
// import NewProductionData from "./inputProduction";
import { toast } from "react-toastify";
import { client } from "../../utils/apollo";
import ViewProduction from "./viewProduction";
import { flatten } from "flat";
// import EditProductionData from "./editProduction";

function Production() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filter, SetFilter] = useState<any>({
    items: [],
  });
  const [showData, setShowData] = useState<{
    open: boolean;
    data: any;
  }>({
    open: false,
    data: null,
  });
  const [formattedFilter, SetFormattedFilter] = useState<any>({});
  const [formattedSort, setFormattedSort] = useState<any>({
    id: SortOrder.Desc,
  });
  const [showUpdate, SetShowUpdate] = useState<{
    open: boolean;
    data: any;
  }>({
    open: false,
    data: null,
  });
  const [sort, setSort] = useState<any>([
    {
      field: "id",
      sort: "desc",
    },
  ]);

  const [newData, setShowNewData] = useState<boolean>(false);

  const {
    data: production,
    error: GetProductionError,
    loading: GetProductionLoading,
    refetch: RefetchProduction,
    startPolling: startPollingProduction,
    stopPolling: stopPollingProduction,
  } = useProductionDataQuery({
    variables: {
      limit: pageSize,
      skip: (page - 1) * pageSize,
      take: pageSize,
      where: formattedFilter,
      orderBy: formattedSort,
    } as any,
  });
  const {
    data: ProductionDataCount,
    error: ProductionDataCountError,
    loading: ProductionDataCountLoading,
    refetch: RefetchProductionDataCount,
    startPolling: startPollingProductionDataCount,
    stopPolling: stopPollingProductionDataCount,
  } = useProductionDataCountQuery({
    variables: {
      where: formattedFilter,
      orderBy: formattedSort,
    },
  });
  const [DeleteProductionData] = useRemoveProductionDataMutation();

  useEffect(() => {
    startPollingProduction(10000);
    startPollingProductionDataCount(10000);
    return () => {
      stopPollingProduction();
      stopPollingProductionDataCount();
    };
  }, []);

  return (
    <div>
      <ViewProduction
        open={showData.open}
        id={showData.data}
        close={() => {
          setShowData({
            open: false,
            data: null,
          });
        }}
      />
      <DataGrid
        filterMode="server"
        sortingMode="server"
        paginationMode="server"
        autoHeight
        logLevel="debug"
        error={GetProductionError || ProductionDataCountError}
        disableSelectionOnClick
        rowsPerPageOptions={[10, 20, 50, 100]}
        disableColumnMenu
        components={{
          Toolbar: GridToolbar,
        }}
        loading={GetProductionLoading || ProductionDataCountLoading}
        onPageChange={(p) => setPage(p + 1)}
        filterModel={filter}
        onFilterModelChange={(f) => {
          SetFilter(f);
          SetFormattedFilter({
            AND: filterTransform(f),
          });
        }}
        onPageSizeChange={(s) => setPageSize(s)}
        rows={production?.productionData || []}
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
        rowCount={ProductionDataCount?.productionDataCount || 0}
        columns={[
          ...columns,
          {
            field: "view ",
            headerName: "",
            flex: 0.75,
            sortable: false,
            renderCell: (params) => (
              <Button
                onClick={() => {
                  setShowData({
                    open: true,
                    data: params.row.id,
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
                          await DeleteProductionData({
                            variables: {
                              removeProductionDataId: params.row.id,
                            },
                          })
                            .then((res) => {
                              if (res.data?.removeProductionData) {
                                toast.success("Deleted Successfully");
                              }
                            })
                            .catch((e) => {
                              toast.error(
                                "Failed to delete some data depend on it"
                              );
                            });
                          RefetchProductionDataCount();
                          RefetchProduction();
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

export default Production;
