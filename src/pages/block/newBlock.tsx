import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  useCreateBlockMutation,
  useCreateSectionMutation,
} from "../../generated";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import {  TextField } from "formik-mui";
import { toast } from "react-toastify";

interface Props {
  open: boolean;
  close: (refresh: boolean) => void;
}

const NewMaintenance: React.FunctionComponent<Props> = (props) => {
  const [createBlock, { data, error, loading }] = useCreateBlockMutation();
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>New Block</DialogTitle>
      <Formik
        initialValues={{
          name: "",
          location: "",
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
        })}
        onSubmit={async (values) => {
          await createBlock({
            variables: {
              createBlockInput: {
                location: values.location,
                name: values.name,
              },
            },
          })
            .then((res) => {
              if (res.data?.createBlock) {
                toast.success("machine created successfully");
                props.close(true);
              }
            })
            .catch(() => {
              toast.error("something went wrong");
            });
        }}
      >
        {({ submitForm }) => {
          return (
            <>
              <DialogContent>
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                  }}
                >
                  <Field
                    component={TextField}
                    type="text"
                    fullWidth
                    style={{ marginTop: "20px" }}
                    label="name"
                    name="name"
                  />
                  <Field
                    component={TextField}
                    type="text"
                    fullWidth
                    style={{ marginTop: "20px" }}
                    label="location"
                    name="location"
                  />
                </Form>
              </DialogContent>
              <DialogActions>
                <Button color="success" onClick={() => submitForm()}>
                  save
                </Button>
                <Button onClick={() => props.close(false)}>Cancel</Button>
              </DialogActions>
            </>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default NewMaintenance;
