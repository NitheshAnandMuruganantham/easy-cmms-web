import { DataGrid } from "@mui/x-data-grid";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  SortOrder,
  useMachinesCountQuery,
  useMachinesQuery,
  useTicketsCountQuery,
  useTicketsQuery,
} from "../../generated";

function Machines() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [formattedSort, setFormattedSort] = useState<any>({});
  const [sort, setSort] = useState<any>([
    {
      field: "created_at",
      sort: "asc",
    },
  ]);
  const {
    data: tickets,
    error: GetTicketsError,
    loading: GetTicketsLoading,
  } = useMachinesQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
      orderBy: formattedSort,
    },
  });
  const {
    data: TicketsCount,
    error: TicketsCountError,
    loading: TicketCountLoading,
  } = useMachinesCountQuery();
  const cellClickedListener = useCallback((event: any) => {
    console.log("cellClicked", event);
  }, []);

  return (
    <div>
      <DataGrid
        filterMode="server"
        sortingMode="server"
        paginationMode="server"
        autoHeight
        error={GetTicketsError || TicketsCountError}
        disableSelectionOnClick
        rowsPerPageOptions={[10, 20, 50, 100]}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        loading={GetTicketsLoading || TicketCountLoading}
        onPageChange={(p) => setPage(p + 1)}
        onPageSizeChange={(s) => setPageSize(s)}
        rows={tickets?.machines || []}
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
        rowCount={TicketsCount?.machinesCount || 0}
        columns={[
          { field: "id", headerName: "ID", width: 70 },
          { field: "label", headerName: "name", width: 200 },
          { field: "name", headerName: "code", width: 100 },
          {
            field: "section",
            headerName: "Section",
            width: 150,
            valueFormatter(params) {
              return params.value?.name;
            },
          },
          {
            field: "block",
            headerName: "Block",
            width: 150,
            valueFormatter(params) {
              return params.value?.name;
            },
          },
        ]}
        pageSize={pageSize}
      />
    </div>
  );
}

export default Machines;
