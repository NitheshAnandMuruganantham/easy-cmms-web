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
  BlockWhereInput,
  InputMaybe,
  SortOrder,
  useBlockQuery,
  useBlocksCountQuery,
  useRemoveBlockMutation,
} from "../../generated";
import { filterTransform } from "../../utils/filterTransform";
import columns from "./cols";
import NewBlock from "./newBlock";
import Reports from "./reports";
import { toast } from "react-toastify";
import { client } from "../../utils/apollo";
import MailList from "./mailList";

function Block() {
  const [page, setPage] = useState(1);
  const [showReport, setShowReport] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState(10);
  const [filter, SetFilter] = useState<any>({
    items: [],
  });
  const [formattedFilter, SetFormattedFilter] = useState<
    InputMaybe<BlockWhereInput>
  >({});
  const [formattedSort, setFormattedSort] = useState<any>({
    id: SortOrder.Desc,
  });
  const [sort, setSort] = useState<any>([
    {
      field: "id",
      sort: "desc",
    },
  ]);

  const [newBlock, setNewBlock] = useState<boolean>(false);

  const {
    data: blocks,
    error: GetBlockError,
    loading: GetBlockLoading,
    refetch: RefetchBlock,
    startPolling: startPollingBlock,
    stopPolling: stopPollingBlock,
  } = useBlockQuery({
    variables: {
      limit: pageSize,
      offset: (page - 1) * pageSize,
      where: formattedFilter,
      orderBy: formattedSort,
    },
  });
  const {
    data: MachinesCount,
    error: MachineCountError,
    loading: MachineCountLoading,
    startPolling: startPollingBlockCount,
    stopPolling: stopPollingBlockCount,
    refetch: RefetchBlockCount,
  } = useBlocksCountQuery({
    variables: {
      where: formattedFilter,
    } as any,
  });

  useEffect(() => {
    startPollingBlockCount(10000);
    startPollingBlock(10000);
    return () => {
      stopPollingBlockCount();
      stopPollingBlock();
    };
  }, []);

  const [showMailList, setShowMailList] = useState<{
    open: boolean;
    blockId: number;
    mailList: string[];
  }>({
    open: false,
    blockId: 0,
    mailList: [],
  });
  const [DeleteBlock] = useRemoveBlockMutation();

  return (
    <div>
      <Reports
        open={showReport}
        close={() => {
          setShowReport(false);
        }}
      />
      <MailList
        blockId={showMailList.blockId}
        close={(refetch: boolean) => {
          if (refetch) {
            RefetchBlockCount();
            RefetchBlock();
          }
          setShowMailList({
            open: false,
            blockId: 0,
            mailList: [],
          });
        }}
        open={showMailList.open}
        mailList={showMailList.mailList}
      />
      <NewBlock
        open={newBlock}
        close={(refetch: boolean) => {
          setNewBlock(false);
          if (refetch) {
            RefetchBlockCount();
            RefetchBlock();
            client.refetchQueries({
              include: ["blockDropdown"],
            });
          }
        }}
      />
      <Box flex={1}>
        <Button
          onClick={() => {
            setNewBlock(true);
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
          New Block
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

      <DataGrid
        filterMode="server"
        sortingMode="server"
        paginationMode="server"
        autoHeight
        logLevel="debug"
        error={GetBlockError || MachineCountError}
        disableSelectionOnClick
        rowsPerPageOptions={[10, 20, 50, 100]}
        disableColumnMenu
        components={{
          Toolbar: GridToolbar,
        }}
        loading={GetBlockLoading || MachineCountLoading}
        onPageChange={(p) => setPage(p + 1)}
        filterModel={filter}
        onFilterModelChange={(f) => {
          SetFilter(f);
          SetFormattedFilter({
            AND: filterTransform(f),
          });
        }}
        onPageSizeChange={(s) => setPageSize(s)}
        rows={blocks?.blocks || []}
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
        rowCount={MachinesCount?.blocksCount || 0}
        columns={[
          ...columns,
          {
            field: "mailList",
            flex: 0.75,
            headerName: "",
            sortable: false,
            renderCell: (params) => (
              <Button
                onClick={() => {
                  setShowMailList({
                    open: true,
                    mailList: params.row.Mailings,
                    blockId: params.row.id,
                  });
                }}
                color="secondary"
                size="small"
                variant="contained"
              >
                Mail List
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
                          await DeleteBlock({
                            variables: {
                              removeBlockId: parseInt(params.row.id, 10),
                            },
                          })
                            .then((res) => {
                              if (res.data?.removeBlock) {
                                toast.success("Deleted Successfully");
                              }
                            })
                            .catch((e) => {
                              toast.error(
                                "Failed to delete some data depend on it"
                              );
                            });
                          RefetchBlockCount();
                          RefetchBlock();
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

export default Block;
