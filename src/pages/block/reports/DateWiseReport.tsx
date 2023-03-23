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
        block: undefined as any,
      }}
      onSubmit={async (values) => {
        let filters: any = {};
        filters["fromDate"] = values.from;
        filters["toDate"] = values.to;
        filters["maintenanceFilter"] = {
          machines: {
            block_id: {
              equals: values.block,
            },
          },
        };
        filters["ticketFilter"] = {
          machines: {
            block_id: {
              equals: values.block,
            },
          },
        };
        filters["routineMaintenancesFilter"] = {
          meachine: {
            block_id: {
              equals: values.block,
            },
          },
        };
        filters["productionFilter"] = {
          meachine: {
            block_id: {
              equals: values.block,
            },
          },
        };
        const filters_64 = btoa(JSON.stringify(filters));
        console.log(filters_64);
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
        block: yup.number().required(),
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
