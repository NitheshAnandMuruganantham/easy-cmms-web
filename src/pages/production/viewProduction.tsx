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
import humanize from "humanize-duration";

import React from "react";

import { TableBody } from "@mui/material";
import { useProductionDataQuery, useProductionQuery } from "../../generated";

interface Props {
  open: boolean;
  close: () => void;
  id: any;
}

const ViewProduction: React.FunctionComponent<Props> = ({
  id,
  open,
  close,
}) => {
  const { data, loading, error }: any = useProductionQuery({
    variables: {
      productionId: id,
    },
  });

  return (
    <Dialog maxWidth="lg" open={open} onClose={close}>
      <DialogTitle>production report</DialogTitle>
      <DialogContent>
        {data && (
          <Box
            style={{
              display: "flex",
            }}
          >
            <Table
              style={{
                textAlign: "center",
              }}
            >
              <TableHead></TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>date</TableCell>
                  <TableCell>
                    {new Date(data?.production?.date).toLocaleDateString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>shift</TableCell>
                  <TableCell>{data?.production?.shift}</TableCell>
                </TableRow>
                {data?.production?.production?.data &&
                  Object.keys(data?.production?.production?.data).map(
                    (key, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{key}</TableCell>
                          <TableCell>
                            {data?.production?.production?.data[key]}
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )}
              </TableBody>
            </Table>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            close();
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewProduction;
