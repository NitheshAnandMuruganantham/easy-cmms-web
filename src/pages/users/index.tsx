import { Button } from "@mui/material";
import {
  DataGrid,
  GridAddIcon,
  GridFilterModel,
  GridToolbar,
} from "@mui/x-data-grid";
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
  SortOrder,
  useDeleteUsersMutation,
  UsersWhereInput,
  useTicketsCountQuery,
  useTicketsQuery,
  useUsersCountQuery,
  useUsersQuery,
} from "../../generated";
import { CircularProgress } from "@mui/material";
import { filterTransform } from "../../utils/filterTransform";
import columns from "./col";
import NewUser from "./newUser";
import { client } from "../../utils/apollo";
import { toast } from "react-toastify";

function Users() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filter, SetFilter] = useState<GridFilterModel>({
    items: [],
  });
  const [formattedFilter, SetFormattedFilter] = useState<
    InputMaybe<UsersWhereInput>
  >({});
  const [deleteUser, { loading: deleteUserLoading }] = useDeleteUsersMutation();
  const [formattedSort, setFormattedSort] = useState<any>({});
  const [ShowNewUser, SetShowNewUser] = useState<boolean>(false);
  const [sort, setSort] = useState<any>([
    {
      field: "created_at",
      sort: "asc",
    },
  ]);
  const {
    data: users,
    error: GetUsersError,
    loading: GetUsersLoading,
    refetch: refetchUsers,
    startPolling: startPollingUsers,
    stopPolling: stopPollingUsers,
  } = useUsersQuery({
    variables: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
      where: formattedFilter,
      orderBy: formattedSort,
    },
  });
  const {
    data: UsersCount,
    error: UsersCountError,
    refetch: refetchUsersCount,
    loading: UserCountLoading,
    startPolling: startPollingUsersCount,
    stopPolling: stopPollingUsersCount,
  } = useUsersCountQuery({
    variables: {
      where: formattedFilter,
    },
  });

  useEffect(() => {
    startPollingUsers(10000);
    startPollingUsersCount(10000);
    return () => {
      stopPollingUsers();
      stopPollingUsersCount();
    };
  }, []);

  const [delCol, SetDelCol] = useState();

  return (
    <div>
      <NewUser
        open={ShowNewUser}
        close={(refetch: boolean) => {
          if (refetch) {
            refetchUsers();
            refetchUsersCount();
            client.refetchQueries({
              include: ["usersDropDown"],
            });
          }
          SetShowNewUser(false);
        }}
      />
      <Button
        variant="contained"
        size="small"
        endIcon={<GridAddIcon />}
        onClick={() => {
          SetShowNewUser(true);
        }}
        style={{ marginBottom: 10 }}
      >
        new User
      </Button>
      <DataGrid
        filterMode="server"
        sortingMode="server"
        paginationMode="server"
        autoHeight
        error={GetUsersError || UsersCountError}
        disableSelectionOnClick
        rowsPerPageOptions={[10, 20, 50, 100]}
        loading={GetUsersLoading || UserCountLoading}
        onPageChange={(p) => setPage(p + 1)}
        onPageSizeChange={(s) => setPageSize(s)}
        rows={users?.users || []}
        filterModel={filter}
        sortModel={sort}
        onFilterModelChange={(f) => {
          SetFilter(f);
          SetFormattedFilter({
            AND: filterTransform(f),
          });
        }}
        disableColumnMenu
        components={{
          Toolbar: GridToolbar,
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
        rowCount={UsersCount?.usersCount || 0}
        columns={[
          ...columns,
          {
            field: "delete",
            headerName: "",
            sortable: false,
            renderCell: (params) => (
              <Button
                disabled={deleteUserLoading && delCol === params.row.id}
                onClick={() => {
                  confirmAlert({
                    title: "Confirm to submit",
                    message: "Are you sure to do this.",
                    buttons: [
                      {
                        label: "Yes",
                        onClick: async () => {
                          SetDelCol(params.row.id);
                          await deleteUser({
                            variables: {
                              removeUserId: params.row.id,
                            },
                          }).catch(() => {
                            toast.error("user linked with other resources");
                          });
                          refetchUsers();
                          refetchUsersCount();
                          client.refetchQueries({
                            include: ["usersDropDown"],
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
                {deleteUserLoading && delCol === params.row.id ? (
                  <CircularProgress
                    size={17}
                    style={{
                      color: "white",
                    }}
                  />
                ) : (
                  "DELETE"
                )}
              </Button>
            ),
          },
        ]}
        pageSize={pageSize}
      />
    </div>
  );
}

export default Users;
