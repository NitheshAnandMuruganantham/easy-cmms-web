import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {} from "@jsonforms/material-renderers";
import React from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { schema, uiSchema } from "./schema";

interface Props {
  open: boolean;
  close: () => void;
}

const renderers = [...materialRenderers];

const InputProduction: React.FunctionComponent<Props> = (props) => {
  const [data, setData] = React.useState<any>({});
  return (
    <Dialog open={props.open} fullWidth maxWidth={"lg"} onClose={close}>
      <DialogTitle>Production data input</DialogTitle>
      <DialogContent>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <JsonForms
            schema={schema}
            uischema={uiSchema}
            data={data}
            renderers={renderers}
            cells={materialCells}
            onChange={({ errors, data }) => setData(data)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="success" onClick={() => {}}>
          save
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

export default InputProduction;
