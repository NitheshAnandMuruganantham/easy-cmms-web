import Button from "@mui/material/Button";
import { DataGrid, GridFilterModel, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import {
  InputMaybe,
  SortOrder,
  TicketWhereInput,
  useDeleteTicketMutation,
  useTicketsCountQuery,
  useTicketsQuery,
} from "../../generated";
import { filterTransform } from "../../utils/filterTransform";
import AssignMaintenance from "./assignMaintanance";
import ViewTicket from "./viewTicket";

import columns from "./col";
import { confirmAlert } from "react-confirm-alert";

function Ticket() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [deleteTicket] = useDeleteTicketMutation();
  const [filter, SetFilter] = useState<GridFilterModel>({
    items: [],
  });
  const [formattedFilter, SetFormattedFilter] = useState<
    InputMaybe<TicketWhereInput>
  >({});
  const [formattedSort, setFormattedSort] = useState<any>({});
  const [search, setSearch] = useState<string>("");
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
    refetch: refetchTickets,
  } = useTicketsQuery({
    variables: {
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: formattedSort,
      where: formattedFilter,
    },
  });
  const {
    data: TicketsCount,
    error: TicketsCountError,
    loading: TicketCountLoading,
    refetch: refetchTicketCount,
  } = useTicketsCountQuery({
    variables: {
      where: formattedFilter,
    },
  });

  const [showViewTicketModal, setShowTicketModal] = useState<{
    open: boolean;
    rowId: number;
  }>({
    rowId: 1,
    open: false,
  });

  const [showAssignMaintanceModal, setShowAssignMaintanceModal] = useState<{
    open: boolean;
    rowId: number;
  }>({
    rowId: 1,
    open: false,
  });

  return (
    <div>
      <AssignMaintenance
        rowId={showAssignMaintanceModal.rowId}
        open={showAssignMaintanceModal.open}
        close={() =>
          setShowAssignMaintanceModal({
            open: false,
            rowId: showAssignMaintanceModal.rowId,
          })
        }
      />
      <ViewTicket
        assignMaintance={() => {
          setShowTicketModal({
            open: false,
            rowId: showViewTicketModal.rowId,
          });
          setShowAssignMaintanceModal({
            open: true,
            rowId: showViewTicketModal.rowId,
          });
        }}
        open={showViewTicketModal.open}
        close={() =>
          setShowTicketModal({
            open: false,
            rowId: showViewTicketModal.rowId,
          })
        }
        rowId={showViewTicketModal.rowId}
      />

      <DataGrid
        filterMode="server"
        sortingMode="server"
        paginationMode="server"
        autoHeight
        disableColumnMenu
        components={{
          Toolbar: GridToolbar,
        }}
        error={GetTicketsError || TicketsCountError}
        rowsPerPageOptions={[10, 20, 50, 100]}
        loading={GetTicketsLoading || TicketCountLoading}
        onPageChange={(p) => setPage(p + 1)}
        onPageSizeChange={(s) => setPageSize(s)}
        rows={tickets?.tickets || []}
        sortModel={sort}
        filterModel={filter}
        onFilterModelChange={(f) => {
          SetFilter(f);
          SetFormattedFilter({
            AND: filterTransform(f),
          });
        }}
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
        rowCount={TicketsCount?.ticketsCount || 0}
        columns={[
          ...columns,
          {
            field: "view ticket",
            headerName: "",
            sortable: false,
            renderCell: (params) => (
              <Button
                onClick={() => {
                  setShowTicketModal({
                    open: true,
                    rowId: params.row.id,
                  });
                }}
                variant="contained"
                size="small"
              >
                View Ticket
              </Button>
            ),
          },
          {
            field: "delete",
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
                          await deleteTicket({
                            variables: {
                              id: params.row.id,
                            },
                          });
                          refetchTicketCount();
                          refetchTickets();
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

export default Ticket;
