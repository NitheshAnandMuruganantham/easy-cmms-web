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
import Chip from "@mui/material/Chip";

import React from "react";
import {
  useGetMaintananceLazyQuery,
  useGetTicketLazyQuery,
} from "../../generated";
import { Badge } from "@mui/material";

interface Props {
  open: boolean;
  close: () => void;
  rowId: number;
}

const ViewMaintance: React.FunctionComponent<Props> = (props) => {
  const [fetchData, { data, loading, error }] = useGetMaintananceLazyQuery();

  React.useEffect(() => {
    if (props.open === true) {
      fetchData({
        variables: {
          maintenanceId: props.rowId,
        },
      });
    }
  }, [props.open]);

  return (
    <Dialog open={props.open} onClose={close}>
      <DialogTitle>Ticket #{data?.maintenance.id}</DialogTitle>
      <DialogContent>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data?.maintenance?.photo && (
            <img
              src={data?.maintenance?.photo}
              style={{
                marginBottom: "20px",
                borderRadius: "10px",
                height: "300px",
              }}
            />
          )}
        </Box>
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
                <TableCell>{data?.maintenance.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{data?.maintenance.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{data?.maintenance.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={
                      data?.maintenance.resolved ? "resolved" : "un-resolved"
                    }
                  />
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
                  {data?.maintenance?.assignee?.name || "un assigned"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Created At</TableCell>
                <TableCell>
                  {new Date(data?.maintenance.created_at).toLocaleString()}
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
