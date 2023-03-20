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
  useUpdateRoutineMaintananceMutation,
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
  id: number;
  data: any;
}

const EditMaintenance: React.FunctionComponent<Props> = (props) => {
  const [updateRoutineMaintanance, { data, error, loading }] =
    useUpdateRoutineMaintananceMutation();
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
      <DialogTitle>Reassign User</DialogTitle>

      <Formik
        initialValues={{
          user: props.data?.assignee?.id,
        }}
        validationSchema={yup.object().shape({
          user: yup.string().required(),
        })}
        onSubmit={async (values) => {
          await updateRoutineMaintanance({
            variables: {
              updateRoutineMaintananceId: props.id,
              updateRoutineMaintananceInput: {
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
                    marginTop: "20px",
                    display: "flex",
                    marginBottom: "20px",
                  }}
                  flexDirection="row"
                >
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

export default EditMaintenance;
