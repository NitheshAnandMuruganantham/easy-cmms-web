import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import DialogTitle from "@mui/material/DialogTitle";
import cronstrue from "cronstrue";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import React from "react";
import { useRoutineMaintananceLazyQuery } from "../../generated";

interface Props {
  open: boolean;
  close: () => void;
  rowId: number;
}

const ViewMaintance: React.FunctionComponent<Props> = (props) => {
  const [fetchData, { data, loading, error }] =
    useRoutineMaintananceLazyQuery();

  React.useEffect(() => {
    if (props.open === true) {
      fetchData({
        variables: {
          routineMaintananceId: props.rowId,
        },
      });
    }
  }, [props.open]);

  return (
    <Dialog open={props.open} onClose={close}>
      <DialogTitle>
        Routine Maintenance #{data?.routineMaintanance.id}
      {loading && <CircularProgress  size={20} style={{
        marginLeft:10
      }}/>}
      </DialogTitle>
      <DialogContent hidden={loading}>
        <Box
          style={{
            display: "flex",
          }}
        >
          <Table
            style={{
              marginRight: "50px",
              textAlign: "center",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>{data?.routineMaintanance.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{data?.routineMaintanance.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{data?.routineMaintanance.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Run At</TableCell>
                <TableCell>
                  {data?.routineMaintanance.cron
                    ? cronstrue.toString(data?.routineMaintanance.cron)
                    : "--"}
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <Table
            style={{
              textAlign: "center",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Created By</TableCell>
                <TableCell>
                  {data?.routineMaintanance?.assignee?.name || "un assigned"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>from</TableCell>
                <TableCell>{data?.routineMaintanance?.from}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>to</TableCell>
                <TableCell>{data?.routineMaintanance?.to}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Created At</TableCell>
                <TableCell>
                  {new Date(
                    data?.routineMaintanance.created_at
                  ).toLocaleString()}
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            props.close();
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewMaintance;
