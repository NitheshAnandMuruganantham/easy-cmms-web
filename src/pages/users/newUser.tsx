import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  useGetAllMachinesDropdownQuery,
  useUsersDropDownQuery,
  useCreateUserMutation,
  Role,
} from "../../generated";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { MuiTelInput } from "mui-tel-input";

import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";
import { phoneRegExp } from "../../utils/patterns";

interface Props {
  open: boolean;
  close: (refresh: boolean) => void;
}

const NewUser: React.FunctionComponent<Props> = (props) => {
  const [createUser, { data, error, loading }] = useCreateUserMutation();
  const { data: MachinesDropdown } = useGetAllMachinesDropdownQuery();
  const { data: UsersDropdown } = useUsersDropDownQuery();
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>New User</DialogTitle>
      <Formik
        initialValues={{
          phone: "+91",
          first_name: "",
          last_name: "",
          role: Role.Fitter,
        }}
        validationSchema={yup.object().shape({
          first_name: yup.string().required(),
          last_name: yup.string().required(),
          role: yup.string().required(),
          phone: yup
            .string()
            .matches(phoneRegExp, "invalid phone number")
            .required(),
        })}
        onSubmit={async (values) => {
          await createUser({
            variables: {
              createUserInput: {
                name: values.first_name + " " + values.last_name,
                phone: values.phone,
                role: values.role,
                profile: {
                  first_name: values.first_name,
                  last_name: values.last_name,
                },
              },
            },
          });
          toast.success("user added successfully");
          props.close(true);
        }}
      >
        {({ submitForm, setFieldValue, values, isSubmitting }) => {
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
                    style={{
                      marginTop: 10,
                    }}
                    label="first name"
                    name="first_name"
                  />
                  <Field
                    component={TextField}
                    type="text"
                    fullWidth
                    label="last name"
                    name="last_name"
                  />
                  <MuiTelInput
                    label="phone"
                    disableFormatting
                    onChange={(n) => {
                      setFieldValue("phone", n);
                    }}
                    disabled={isSubmitting}
                    value={values.phone}
                    name="phone"
                  />
                  <Field fullWidth component={Select} label="role" name="role">
                    <MenuItem value={Role.Fitter}>Fitter</MenuItem>
                    <MenuItem value={Role.Supervisor}>Supervisor</MenuItem>
                    <MenuItem value={Role.Manager}>Manager</MenuItem>
                  </Field>
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

export default NewUser;
