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
  useUpdateUserMutation,
  Users,
} from "../../generated";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { MuiTelInput } from "mui-tel-input";

import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";
import { phoneRegExp } from "../../utils/patterns";
import { CircularProgress } from "@mui/material";

interface Props {
  open: boolean;
  close: (refresh: boolean) => void;
  data: Users;
}

const EditUser: React.FunctionComponent<Props> = (props) => {
  const [updateUser, { data, error, loading }] = useUpdateUserMutation();
  const { data: MachinesDropdown } = useGetAllMachinesDropdownQuery();
  const { data: UsersDropdown } = useUsersDropDownQuery();
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>New User</DialogTitle>
      <Formik
        initialValues={{
          first_name: props.data?.name ? props.data?.name.split(" ")[0] : "",
          last_name: props.data?.name ? props.data?.name.split(" ")[1] : "",
          role: props.data?.role || Role.Fitter,
          role_alias: props.data?.role_alias || "",
          add_role_1: props.data?.extra_roles?.[0] || "",
          add_role_2: props.data?.extra_roles?.[1] || "",
        }}
        validationSchema={yup.object().shape({
          first_name: yup.string().required(),
          last_name: yup.string().required(),
          role: yup.string().required(),
          role_alias: yup.string().required(),
          add_role_2: yup.string(),
          add_role_1: yup.string(),
        })}
        onSubmit={async (values) => {
          await updateUser({
            variables: {
              updateUserId: props.data.id,
              updateUserInput: {
                name: {
                  set: values.first_name + " " + values.last_name,
                },
                extra_roles: {
                  set: [values.add_role_1, values.add_role_2] as Role[],
                },
                role: { set: values.role },
                role_alias: { set: values.role_alias },
                profile: {
                  set: {
                    first_name: values.first_name,
                    last_name: values.last_name,
                  },
                },
              },
            },
          })
            .then((res) => {
              toast.success("user updated successfully");
              props.close(true);
            })
            .catch((err) => {
              toast.error("error updating user");
            });
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
                  <Field
                    fullWidth
                    component={Select}
                    label="underlying role"
                    name="role"
                  >
                    <MenuItem value={Role.Fitter}>Fitter</MenuItem>
                    <MenuItem value={Role.Supervisor}>Supervisor</MenuItem>
                    <MenuItem value={Role.Manager}>Manager</MenuItem>
                    <MenuItem value={Role.InputController}>
                      Input Controller
                    </MenuItem>
                    <MenuItem value={Role.ProductionController}>
                      Production Controller
                    </MenuItem>
                  </Field>
                  <Field
                    component={TextField}
                    type="text"
                    fullWidth
                    label="role alias"
                    name="role_alias"
                  />
                  <Field
                    fullWidth
                    component={Select}
                    label="additional role 1"
                    name="add_role_1"
                  >
                    <MenuItem value={Role.InputController}>
                      InputController
                    </MenuItem>
                    <MenuItem value={Role.ProductionController}>
                      ProductionController
                    </MenuItem>
                    <MenuItem value={Role.Engineer}>Engineer</MenuItem>
                    <MenuItem value={Role.Fitter}>Fitter</MenuItem>
                    <MenuItem value={Role.Guest}>Guest</MenuItem>
                  </Field>
                  <Field
                    fullWidth
                    component={Select}
                    label="additional role 2"
                    name="add_role_2"
                  >
                    <MenuItem value={Role.InputController}>
                      InputController
                    </MenuItem>
                    <MenuItem value={Role.ProductionController}>
                      ProductionController
                    </MenuItem>
                    <MenuItem value={Role.Fitter}>Fitter</MenuItem>
                    <MenuItem value={Role.Engineer}>Engineer</MenuItem>
                    <MenuItem value={Role.Guest}>Guest</MenuItem>
                  </Field>
                </Form>
              </DialogContent>
              <DialogActions>
                <Button
                  disabled={isSubmitting}
                  color="success"
                  onClick={() => submitForm()}
                >
                  {isSubmitting && (
                    <CircularProgress size={17} style={{ marginRight: 10 }} />
                  )}
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

export default EditUser;
