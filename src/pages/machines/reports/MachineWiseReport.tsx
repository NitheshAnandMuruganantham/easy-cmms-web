import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import axios from "../../../utils/axios";
import { useGetAllMachinesDropdownQuery } from "../../../generated";
import { Select } from "formik-mui";
import MenuItem from "@mui/material/MenuItem";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "formik-mui-x-date-pickers";

function MachineWiseReport() {
  const { data: MachinesDropdown } = useGetAllMachinesDropdownQuery();

  return (
    <Formik
      initialValues={{
        machine: "",
        to: new Date(),
        from: new Date(new Date().setHours(0)),
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
        machine: yup.string().required(),
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
                  </Box>
                </LocalizationProvider>
                <Button type="submit">download</Button>
              </Box>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default MachineWiseReport;
