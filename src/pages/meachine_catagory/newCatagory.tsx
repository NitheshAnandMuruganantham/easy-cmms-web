import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  useCreateMachineMutation,
  useBlockDropdownQuery,
  useSectionsDropdownQuery,
  useMeachineCatagoryDropdownQuery,
  useCreateCatagoriesMutation,
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

const NewMaintenance: React.FunctionComponent<Props> = (props) => {
  const [createCategory, { data, error, loading }] =
  useCreateCatagoriesMutation();
  const { data: BlockDropdown } = useBlockDropdownQuery();
  const { data: SectionDropdown } = useSectionsDropdownQuery();
  const { data: MeachineCatagoriesDropdown } =
    useMeachineCatagoryDropdownQuery();
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>New Category</DialogTitle>
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
        })}
        onSubmit={async (values) => {
          await createCategory({
            variables: {
            createCategoryInput: {
                name: values.name,   
            },
          },
          })
            .then((res) => {
              if (res.data?.createMachineCategory) {
                toast.success("category created successfully");
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

export default NewMaintenance;
