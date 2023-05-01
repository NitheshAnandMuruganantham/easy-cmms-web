import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import Chip from "@mui/material/Chip";

import React from "react";
import { useInvoiceLazyQuery } from "../../generated";
import { Badge } from "@mui/material";

interface Props {
  open: boolean;
  close: () => void;
  rowId: number;
}

const ViewInvoice: React.FunctionComponent<Props> = (props) => {
  const [fetchData, { data, loading, error }] = useInvoiceLazyQuery();

  React.useEffect(() => {
    if (props.open === true) {
      fetchData({
        variables: {
          invoiceId: props.rowId,
        },
      });
    }
  }, [props.open]);

  return (
    <Dialog open={props.open} fullWidth onClose={close}>
      <DialogTitle>Invoice {data?.invoice.number}</DialogTitle>
      <DialogContent>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              marginRight: 10,
            }}
          >
            Date:
          </Typography>
          <Typography>
            {new Date(data?.invoice.invoice_date).toLocaleDateString()}
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 10,
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              marginRight: 10,
            }}
          >
            Invoice Number:
          </Typography>
          <Typography>{data?.invoice.number}</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            marginBottom: 10,
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              marginRight: 10,
            }}
          >
            Amount :
          </Typography>
          <Typography>INR {data?.invoice.total}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #e0e0e0",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Box>item</Box>
            <Box>quantity</Box>
            <Box>unit price</Box>
            <Box>total</Box>
          </Box>
          {data?.invoice?.invoice_items &&
            data?.invoice.invoice_items.map((data, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    border: "1px solid #e0e0e0",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <Box>{data.item.name}</Box>
                  <Box>{data.quantity}</Box>
                  <Box>{data.unit_price}</Box>
                  <Box>{data.quantity * data.unit_price}</Box>
                </Box>
              );
            })}
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

export default ViewInvoice;
