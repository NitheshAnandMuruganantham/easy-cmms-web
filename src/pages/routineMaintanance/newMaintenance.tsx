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
} from "../../generated";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { DateTimePicker, TimePicker } from "formik-mui-x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";

interface Props {
  open: boolean;
  close: (refresh: boolean) => void;
}

const NewMaintenance: React.FunctionComponent<Props> = (props) => {
  const [createRoutineMaintanance, { data, error, loading }] =
    useCreateRoutineMaintananceMutation();
  const { data: MachinesDropdown } = useGetAllMachinesDropdownQuery();
  const { data: UsersDropdown } = useUsersDropDownQuery();
  return (
    <Dialog maxWidth="lg" open={props.open} onClose={close}>
      <DialogTitle>New Routine Maintanances</DialogTitle>

      <Formik
        initialValues={{
          name: "",
          description: "",
          from: "",
          to: "",
          machine: "",
          user: "",
          cron: "",
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
          description: yup.string().required(),
          from: yup.string().required(),
          to: yup.string().required(),
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
                from: values.from,
                to: values.to,
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
        {({ submitForm, values, setFieldValue }) => {
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
                      headers: ["DAILY", "HOURLY", "MONTHLY", "WEEKLY"],
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
                        component={TimePicker}
                        label="from"
                        name="from"
                      />
                      <Field
                        fullWidth
                        minTime={values.from}
                        component={TimePicker}
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
                </Box>
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
