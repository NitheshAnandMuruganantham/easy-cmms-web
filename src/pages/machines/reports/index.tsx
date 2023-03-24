import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Select from "@mui/material/Select";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem } from "@mui/material";
import MachineWiseReport from "./MachineWiseReport";

interface Props {
  open: boolean;
  close: () => void;
}

const Reports: React.FunctionComponent<Props> = (props) => {
  const [type, SetType] = React.useState<number>(1);
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>Reports</DialogTitle>
      <DialogContent>
        <div
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <MachineWiseReport />
        </div>
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

export default Reports;
