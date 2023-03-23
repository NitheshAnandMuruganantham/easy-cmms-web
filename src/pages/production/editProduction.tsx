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
  Role,
  useUpdateProductionMutation,
} from "../../generated";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { DateTimePicker } from "formik-mui-x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import axios from "../../utils/axios";

interface Props {
  open: boolean;
  data: any;
  close: (refresh: boolean) => void;
}

const EditProductionData: React.FunctionComponent<Props> = (props) => {
  const [update, { data, error, loading }] = useUpdateProductionMutation();
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>update Production Data</DialogTitle>
      <Formik
        initialValues={{
          total_run_time: props.data?.total_run_time,
          total_down_time: props.data?.total_down_time,
          target_production: props.data?.target_production,
          actual_production: props.data?.actual_production,
          from: new Date(props.data?.from),
          to: new Date(props.data?.to),
        }}
        validationSchema={yup.object().shape({
          total_run_time: yup.number().required(),
          total_down_time: yup.number().required(),
          target_production: yup.number().required(),
          actual_production: yup.number().required(),
          from: yup.date().required(),
          to: yup.date().required(),
        })}
        onSubmit={async (values) => {
          await update({
            variables: {
              updateProductionId: props.data.id,
              updateProductionInput: {
                total_run_time: {
                  set: values.total_run_time,
                },
                total_down_time: { set: values.total_down_time },
                target_production: { set: values.target_production },
                actual_production: { set: values.actual_production },
                from: { set: values.from },
                to: { set: values.to },
              },
            },
          })
            .then((res) => {
              if (res.data?.updateProduction) {
                toast.success("updated successfully");
                props.close(true);
              }
            })
            .catch(() => {
              toast.error("something went wrong");
            });
        }}
      >
        {({ submitForm, isSubmitting, values }) => {
          return (
            <>
              <DialogContent>
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                    marginTop: "20px",
                  }}
                >
                  <Field
                    fullWidth
                    type="number"
                    component={TextField}
                    label="total run time (in minutes)"
                    name="total_run_time"
                  />
                  <Field
                    fullWidth
                    type="number"
                    component={TextField}
                    label="total down time (in minutes)"
                    name="total_down_time"
                  />
                  <Field
                    fullWidth
                    type="number"
                    component={TextField}
                    label="target production"
                    name="target_production"
                  />
                  <Field
                    fullWidth
                    type="number"
                    component={TextField}
                    label="actual production"
                    name="actual_production"
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Field
                      fullWidth
                      component={DateTimePicker}
                      label="from"
                      minDate={new Date()}
                      name="from"
                    />
                    <Field
                      fullWidth
                      component={DateTimePicker}
                      label="to"
                      minDate={values.from}
                      name="to"
                    />
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

export default EditProductionData;
