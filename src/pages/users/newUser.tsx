import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  useCreateUserMutation,
  Role,
  useBlockDropdownQuery,
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
}

const NewUser: React.FunctionComponent<Props> = (props) => {
  const [createUser, { data, error, loading }] = useCreateUserMutation();
  const { data: BlockDropdown } = useBlockDropdownQuery();
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>New User</DialogTitle>
      <Formik
        initialValues={{
          phone: "+91",
          first_name: "",
          last_name: "",
          block: 1,
          role: Role.Fitter,
          role_alias: "",
          add_role_1: "",
          add_role_2: "",
        }}
        validationSchema={yup.object().shape({
          first_name: yup.string().required(),
          last_name: yup.string().required(),
          role: yup.string().required(),
          add_role_2: yup.string(),
          add_role_1: yup.string(),
          role_alias: yup.string().required(),
          block: yup.string().required(),
          phone: yup
            .string()
            .matches(phoneRegExp, "invalid phone number")
            .required(),
        })}
        onSubmit={async (values) => {
          await createUser({
            variables: {
              createUserInput: {
                block: {
                  connect: {
                    id: 1,
                  },
                },
                name: values.first_name + " " + values.last_name,
                phone: values.phone,
                role: values.role,
                extra_roles: {
                  set: [values.add_role_1, values.add_role_2] as Role[],
                },
                role_alias: values.role_alias,
                profile: {
                  first_name: values.first_name,
                  last_name: values.last_name,
                },
              },
            },
          })
            .then((res) => {
              if (res.data?.createUser) {
                toast.success("user added successfully");
                props.close(true);
              }
            })
            .catch((err) => {
              toast.error("something went wrong");
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
                  <Field
                    fullWidth
                    component={Select}
                    label="block"
                    name="block"
                  >
                    {BlockDropdown?.blocks.map((data) => {
                      return (
                        <MenuItem key={data.value} value={data.value}>
                          {data.name}
                        </MenuItem>
                      );
                    })}
                  </Field>
                  <Field
                    fullWidth
                    component={Select}
                    label="underlying role"
                    name="role"
                  >
                    <MenuItem value={Role.Fitter}>Fitter</MenuItem>
                    <MenuItem value={Role.Supervisor}>Supervisor</MenuItem>
                    <MenuItem value={Role.Manager}>Manager</MenuItem>
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
                    <MenuItem value={Role.Supervisor}>Supervisor</MenuItem>
                    <MenuItem value={Role.InputController}>
                      InputController
                    </MenuItem>
                    <MenuItem value={Role.ProductionController}>
                      ProductionController
                    </MenuItem>
                    <MenuItem value={Role.Engineer}>Engineer</MenuItem>
                    <MenuItem value={Role.Guest}>Guest</MenuItem>
                  </Field>
                  <Field
                    fullWidth
                    component={Select}
                    label="additional role 2"
                    name="add_role_2"
                  >
                    <MenuItem value={Role.Supervisor}>Supervisor</MenuItem>
                    <MenuItem value={Role.InputController}>
                      InputController
                    </MenuItem>
                    <MenuItem value={Role.ProductionController}>
                      ProductionController
                    </MenuItem>
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

export default NewUser;
