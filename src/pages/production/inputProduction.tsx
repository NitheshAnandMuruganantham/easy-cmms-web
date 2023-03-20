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
  close: (refresh: boolean) => void;
}

const NewProductionData: React.FunctionComponent<Props> = (props) => {
  const [createMaintanance, { data, error, loading }] =
    useCreateMaintananceMutation();
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
      <DialogTitle>New Production Data</DialogTitle>
      <Formik
        initialValues={{
          total_run_time: 0,
          total_down_time: 0,
          target_production: 0,
          actual_production: 0,
          from: new Date(),
          to: new Date().setHours(new Date().getHours() + 1),
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
          await axios
            .post("inputProduction", {
              data: {
                total_run_time: values.total_run_time,
                total_down_time: values.total_down_time,
                target_production: values.target_production,
                actual_production: values.actual_production,
                from: values.from,
                to: values.to,
              },
            })
            .then((res) => {
              if (res.data?.createMaintanance) {
                toast.success("machine created successfully");
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
                    label="total run time"
                    name="total_run_time"
                  />
                  <Field
                    fullWidth
                    type="number"
                    component={TextField}
                    label="total down time"
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

export default NewProductionData;
