import React, { useState } from "react";
import Cron from "react-cron-generator";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DialogTitle from "@mui/material/DialogTitle";
import {
  useGetAllMachinesDropdownQuery,
  useUsersDropDownQuery,
  useCreateRoutineMaintananceMutation,
  Role,
} from "../../generated";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { DateTimePicker, TimePicker } from "formik-mui-x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";
import LinearProgress from "@mui/material/LinearProgress";
import { ProgressBar } from "react-toastify/dist/components";
import { CircularProgress } from "@mui/material";

interface Props {
  open: boolean;
  close: (refresh: boolean) => void;
}

const NewMaintenance: React.FunctionComponent<Props> = (props) => {
  const [createRoutineMaintanance, { data, error, loading }] =
    useCreateRoutineMaintananceMutation();
  const { data: MachinesDropdown, loading: MachinesDropdownLoading } =
    useGetAllMachinesDropdownQuery();
  const { data: UsersDropdown, loading: UsersDropdownLoading } =
    useUsersDropDownQuery({
      variables: {
        where: {
          role: {
            equals: Role.Fitter,
          },
        },
      },
    });
  return (
    <Dialog maxWidth="lg" open={props.open} onClose={close}>
      <DialogTitle>New Routine Maintanances</DialogTitle>

      <Formik
        initialValues={{
          name: "",
          description: "",
          duration: 60,
          machine: "",
          user: "",
          cron: "0 0 00 1/1 * ? *",
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
          description: yup.string().required(),
          duration: yup.number().required(),
          machine: yup.string().required(),
          user: yup.string().required(),
          cron: yup.string().required(),
        })}
        onSubmit={async (values) => {
          await createRoutineMaintanance({
            variables: {
              createRoutineMaintananceInput: {
                name: values.name,
                description: values.description,
                duration: values.duration,
                meachine: {
                  connect: {
                    id: values.machine,
                  },
                },
                cron: values.cron
                  .replace("?", "*")
                  .slice(2, values.cron.length - 2),
                assignee: {
                  connect: {
                    id: values.user,
                  },
                },
              },
            },
          });
          toast.success("maintenance added successfully");
          props.close(true);
        }}
      >
        {({ submitForm, values, setFieldValue, isSubmitting }) => {
          return (
            <>
              <DialogContent>
                <Box
                  style={{
                    width: "60vw",
                    display: "flex",
                    marginBottom: "20px",
                  }}
                  flexDirection="row"
                >
                  <Cron
                    onChange={(e) => {
                      setFieldValue("cron", e);
                    }}
                    value={values.cron}
                    showResultText={true}
                    showResultCron={false}
                    locale="en"
                    options={{
                      headers: ["DAILY", "HOURLY", "WEEKLY"],
                    }}
                  />
                  <Form
                    style={{
                      width: "100%",
                      marginLeft: "20px",
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "20px",
                    }}
                  >
                    <Field
                      component={TextField}
                      type="text"
                      fullWidth
                      style={{ marginTop: "5px" }}
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
                        type="number"
                        component={TextField}
                        label="duration (minutes)"
                        name="duration"
                      />
                      <Field
                        fullWidth
                        loading
                        component={Select}
                        label="machine"
                        name="machine"
                      >
                        {MachinesDropdown?.machines ? (
                          MachinesDropdown?.machines.map((data) => {
                            return (
                              <MenuItem key={data.value} value={data.value}>
                                {data.label}
                              </MenuItem>
                            );
                          })
                        ) : (
                          <LinearProgress
                            style={{
                              marginRight: "auto",
                              marginLeft: "auto",
                            }}
                          />
                        )}
                      </Field>
                      <Field
                        fullWidth
                        component={Select}
                        label="user"
                        name="user"
                      >
                        {UsersDropdown?.users ? (
                          UsersDropdown?.users.map((data) => {
                            return (
                              <MenuItem key={data.value} value={data.value}>
                                {data.name} - ({data.phone})
                              </MenuItem>
                            );
                          })
                        ) : (
                          <LinearProgress />
                        )}
                      </Field>
                    </LocalizationProvider>
                  </Form>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  disabled={isSubmitting}
                  color="success"
                  onClick={() => submitForm()}
                >
                  {isSubmitting && (
                    <CircularProgress size={17} style={{ marginRight: 3 }} />
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

export default NewMaintenance;
