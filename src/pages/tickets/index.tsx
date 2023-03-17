import Button from "@mui/material/Button";
import { DataGrid, GridFilterModel, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import {
  InputMaybe,
  SortOrder,
  Ticket,
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
import axios from "../../utils/axios";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [sort, setSort] = useState<any>([
    {
      field: "created_at",
      sort: "asc",
    },
  ]);

  const {
    data: TicketsCount,
    error: TicketsCountError,
    loading: TicketCountLoading,
    refetch: refetchTicketCount,
  } = useTicketsCountQuery({
    pollInterval: 1000,
    variables: {
      where: formattedFilter,
    },
  });

  const RefetchTickets = () => {
    refetchTicketCount();
    setLoading(true);
    axios
      .post("tickets", {
        take: pageSize,
        skip: (page - 1) * pageSize,
        where: formattedFilter,
        orderBy: formattedSort,
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    RefetchTickets();
  }, [page, pageSize, formattedFilter, formattedSort]);

  useEffect(() => {
    RefetchTickets();
  }, []);

  const [showViewTicketModal, setShowTicketModal] = useState<{
    open: boolean;
    data: Ticket | null;
  }>({
    data: null,
    open: false,
  });

  const [showAssignMaintanceModal, setShowAssignMaintanceModal] = useState<{
    open: boolean;
    data: Ticket | null;
  }>({
    data: null,
    open: false,
  });

  return (
    <div>
      <AssignMaintenance
        data={showAssignMaintanceModal.data as Ticket}
        open={showAssignMaintanceModal.open}
        close={() =>
          setShowAssignMaintanceModal({
            open: false,
            data: null,
          })
        }
      />
      <ViewTicket
        data={showViewTicketModal.data as Ticket}
        assignMaintance={(data) => {
          console.log(data);
          setShowAssignMaintanceModal({
            open: true,
            data,
          });
          setShowTicketModal({
            open: false,
            data: null,
          });
        }}
        open={showViewTicketModal.open}
        close={() =>
          setShowTicketModal({
            open: false,
            data: null,
          })
        }
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
        error={TicketsCountError}
        rowsPerPageOptions={[10, 20, 50, 100]}
        loading={loading || TicketCountLoading}
        onPageChange={(p) => setPage(p + 1)}
        onPageSizeChange={(s) => setPageSize(s)}
        rows={data || []}
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
                    data: params.row,
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
                          RefetchTickets();
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
