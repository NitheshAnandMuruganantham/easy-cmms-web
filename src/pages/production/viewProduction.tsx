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
                marginRight: "50px",
                textAlign: "center",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Production ID</TableCell>
                  <TableCell>Production From</TableCell>
                  <TableCell>Production To</TableCell>
                  <TableCell>Running Minutes</TableCell>
                  <TableCell>Downtime Minutes</TableCell>
                  <TableCell>Actual Production</TableCell>
                  <TableCell>Target Production</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{data.production.id}</TableCell>
                  <TableCell>
                    {new Date(data.production.from).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {new Date(data.production.to).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {humanize(data.production.total_run_time * 60 * 1000)}
                  </TableCell>
                  <TableCell>
                    {humanize(data.production.total_down_time * 60 * 1000)}
                  </TableCell>
                  <TableCell>
                    {data.production.actual_production / 1000}
                  </TableCell>
                  <TableCell>
                    {data.production.target_production / 1000}
                  </TableCell>
                </TableRow>
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
