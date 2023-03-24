import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Field, Form, Formik } from "formik";
import { DateTimePicker } from "formik-mui-x-date-pickers";
import * as yup from "yup";
import { MenuItem } from "@mui/material";
import { useBlockDropdownQuery } from "../../../generated";
import { Select } from "formik-mui";

function DateWiseReport() {
  const { data: BlockDropdown } = useBlockDropdownQuery();
  return (
    <Formik
      initialValues={{
        from: new Date(),
        to: new Date(new Date().setHours(0)),
      }}
      onSubmit={async (values) => {
        let filters: any = {};
        filters["fromDate"] = values.from;
        filters["toDate"] = values.to;
        filters["maintenanceFilter"] = [];
        filters["ticketFilter"] = [];
        filters["routineMaintenancesFilter"] = [];
        filters["productionFilter"] = [];
        const filters_64 = btoa(JSON.stringify(filters));
        window.open(
          `${
            import.meta.env["VITE_ENDPOINT"]
          }/generate-report/report/${filters_64}`,
          "_blank"
        );
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
