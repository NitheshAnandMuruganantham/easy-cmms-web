import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import axios from "../../../utils/axios";
import { useGetAllMachinesDropdownQuery } from "../../../generated";
import { Select } from "formik-mui";
import MenuItem from "@mui/material/MenuItem";

function MachineWiseReport() {
  const { data: MachinesDropdown } = useGetAllMachinesDropdownQuery();

  return (
    <Formik
      initialValues={{
        machine: "",
      }}
      onSubmit={async (values) => {
        const url = await axios.get(
          `/dashboard/getMachineMaintanancesReport/${values.machine}`,
          {
            responseType: "document/csv" as any,
          }
        );
        window.open(url.data, "_blank");
      }}
      validationSchema={yup.object().shape({
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
