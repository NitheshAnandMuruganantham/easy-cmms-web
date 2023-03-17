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
import { Ticket, useGetTicketLazyQuery } from "../../generated";

interface Props {
  assignMaintance: (data: any) => void;
  open: boolean;
  close: () => void;
  data: Ticket;
}

const ViewTicket: React.FunctionComponent<Props> = (props) => {
  const [fetchData, { data, loading, error }] = useGetTicketLazyQuery();

  React.useEffect(() => {
    if (props.open === true) {
      fetchData({
        variables: {
          ticketId: props.data.id,
        },
      });
    }
  }, [props.open]);
  if (!props.open) {
    return null;
  } else
    return (
      <Dialog open={props.open} onClose={close}>
        <DialogTitle>Ticket #{data?.ticket.id}</DialogTitle>
        <DialogContent>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={data?.ticket.photos}
              style={{
                marginBottom: "20px",
                borderRadius: "10px",
                height: "300px",
              }}
            />
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
                  <TableCell>{data?.ticket.id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{data?.ticket.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>{data?.ticket.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell>
                    <Chip color="primary" label={data?.ticket.status} />
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
                  <TableCell>{data?.ticket.user.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Created At</TableCell>
                  <TableCell>
                    {new Date(data?.ticket.created_at).toLocaleString()}
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            color="success"
            onClick={() => {
              props.assignMaintance(data?.ticket);
            }}
          >
            Assign Maintenance
          </Button>
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

export default ViewTicket;
