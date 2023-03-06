import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Field, Form, Formik } from "formik";
import { DateTimePicker } from "formik-mui-x-date-pickers";
import * as yup from "yup";
import axios from "../../../utils/axios";

function DateWiseReport() {
  return (
    <Formik
      initialValues={{
        from: new Date(),
        to: new Date(new Date().setHours(0)),
      }}
      onSubmit={async (values) => {
        const url = await axios.get(
          `/dashboard/getAllMaintanancesCsv/${values.from.toISOString()}/${values.to.toISOString()}`,
          {
            responseType: "document/csv" as any,
          }
        );
        window.open(url.data, "_blank");
      }}
      validationSchema={yup.object().shape({
        from: yup.date().required(),
        to: yup.date().required(),
      })}
    >
      {({ values }) => {
        return (
          <div
            style={{
              width: "100%",
            }}
          >
            <Form>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box
                  style={{
                    marginTop: 10,

                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                >
                  <Field
                    fullWidth
                    style={{
                      marginRight: "10px",
                    }}
                    component={DateTimePicker}
                    label="from"
                    maxDateTime={new Date()}
                    name="from"
                  />
                  <Field
                    fullWidth
                    component={DateTimePicker}
                    label="to"
                    minDateTime={values.from}
                    name="to"
                  />
                  <Button type="submit">download</Button>
                </Box>
              </LocalizationProvider>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default DateWiseReport;
