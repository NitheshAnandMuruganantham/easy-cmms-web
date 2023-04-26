import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DialogTitle from "@mui/material/DialogTitle";
import {
  useGetAllMachinesDropdownQuery,
  useCreateMaintananceMutation,
  useGetTicketLazyQuery,
  useUsersDropDownQuery,
  useCreateMachineMutation,
  useBlockDropdownQuery,
  useSectionsDropdownQuery,
  useMeachineCatagoryDropdownQuery,
  useCreateSectionMutation,
  useCreateItemCatagoryMutation,
} from "../../generated";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { DateTimePicker } from "formik-mui-x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";

interface Props {
  open: boolean;
  close: (refresh: boolean) => void;
}

const NewItemCatagory: React.FunctionComponent<Props> = (props) => {
  const [createItemCategory, { data, error, loading }] =
    useCreateItemCatagoryMutation();
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>New Spare Category</DialogTitle>
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
        })}
        onSubmit={async (values) => {
          await createItemCategory({
            variables: {
              createItemCatagoryInput: {
                name: values.name,
              },
            },
          })
            .then((res) => {
              if (res.data?.createItemCatagory) {
                toast.success("Spare category created successfully");
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

export default NewItemCatagory;
