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
  const [formattedSort, setFormattedSort] = useState<any>({});
  const [sort, setSort] = useState<any>([]);

  const [newBlock, setNewBlock] = useState<boolean>(false);

  const {
    data: machines,
    error: GetMachineError,
    loading: GetMachineLoading,
    refetch: RefetchMaintenances,
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
    refetch: RefetchMaintenanceCount,
  } = useBlocksCountQuery({
    variables: {
      where: formattedFilter,
    } as any,
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
      <NewBlock
        open={newBlock}
        close={(refetch: boolean) => {
          setNewBlock(false);
          if (refetch) {
            RefetchMaintenanceCount();
            RefetchMaintenances();
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
        error={GetMachineError || MachineCountError}
        disableSelectionOnClick
        rowsPerPageOptions={[10, 20, 50, 100]}
        disableColumnMenu
        components={{
          Toolbar: GridToolbar
        }}
        loading={GetMachineLoading || MachineCountLoading}
        onPageChange={(p) => setPage(p + 1)}
        filterModel={filter}
        onFilterModelChange={(f) => {
          SetFilter(f);
          SetFormattedFilter({
            AND: filterTransform(f),
          });
        }}
        onPageSizeChange={(s) => setPageSize(s)}
        rows={machines?.blocks || []}
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
                              removeBlockId: parseInt(params.row.id,10),
                            },
                          }).then((res) => {
                            if (res.data?.removeBlock) {
                              toast.success("Deleted Successfully");
                            } 
                          }).catch((e)=>{
                            toast.error("Failed to delete some data depend on it");
                          })
                          RefetchMaintenanceCount();
                          RefetchMaintenances();
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
