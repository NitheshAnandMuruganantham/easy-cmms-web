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
  useUsersDropDownQuery,
  Role,
  useUpdateMaintananceMutation,
} from "../../generated";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { DateTimePicker } from "formik-mui-x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

interface Props {
  open: boolean;
  data: any;
  close: (refresh: boolean) => void;
}

const EditMaintenance: React.FunctionComponent<Props> = (props) => {
  const [updateMaintanance, { data, error, loading }] =
    useUpdateMaintananceMutation();
  const { data: MachinesDropdown } = useGetAllMachinesDropdownQuery();
  const { data: UsersDropdown } = useUsersDropDownQuery({
    variables: {
      where: {
        role: {
          equals: Role.Fitter,
        },
      },
    },
  });
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>Edit Maintenance</DialogTitle>
      <Formik
        initialValues={{
          name: props.data?.name || "",
          description: props.data?.description || "",
          from: props.data?.from || new Date(),
          to:
            props.data?.to ||
            new Date(new Date().setHours(new Date().getHours() + 1)),
          machine: props.data?.machines?.id || "",
          user: props.data?.assignee?.id || "",
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
          description: yup.string().required(),
          machine: yup.string().required(),
          user: yup.string().required(),
          from: yup.date().required(),
          to: yup.date().required(),
        })}
        onSubmit={async (values) => {
          await updateMaintanance({
            variables: {
              updateMaintananceId: props.data?.id,
              updateMaintananceInput: {
                name: {
                  set: values.name,
                },
                description: {
                  set: values.description,
                },
                from: {
                  set: new Date(values.from).toISOString(),
                },
                to: {
                  set: new Date(values.to).toISOString(),
                },
                machines: {
                  connect: {
                    id: values.machine,
                  },
                },
                assignee: {
                  connect: {
                    id: values.user,
                  },
                },
              },
            },
          })
            .then((res) => {
              if (res.data?.updateMaintanance) {
                toast.success("machine created successfully");
                props.close(true);
              }
            })
            .catch(() => {
              toast.error("something went wrong");
            });
        }}
      >
        {({ submitForm, isSubmitting }) => {
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
                    label="description"
                    name="description"
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Field
                      fullWidth
                      component={DateTimePicker}
                      label="from"
                      name="from"
                    />
                    <Field
                      fullWidth
                      component={DateTimePicker}
                      label="to"
                      name="to"
                    />
                    <Field
                      fullWidth
                      component={Select}
                      label="machine"
                      name="machine"
                    >
                      {MachinesDropdown?.machines.map((data) => {
                        return (
                          <MenuItem key={data.value} value={data.value}>
                            {data.label}
                          </MenuItem>
                        );
                      })}
                    </Field>
                    <Field
                      fullWidth
                      component={Select}
                      label="user"
                      name="user"
                    >
                      {UsersDropdown?.users.map((data) => {
                        return (
                          <MenuItem key={data.value} value={data.value}>
                            {data.name} - ({data.phone})
                          </MenuItem>
                        );
                      })}
                    </Field>
                  </LocalizationProvider>
                </Form>
              </DialogContent>
              <DialogActions>
                <Button color="success" onClick={() => submitForm()}>
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

export default EditMaintenance;
