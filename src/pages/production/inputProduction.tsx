import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DialogTitle from "@mui/material/DialogTitle";
import { buildYup } from "schema-to-yup";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { DatePicker } from "formik-mui-x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import { CircularProgress } from "@mui/material";
import TimeDurationInput from "../../components/duration";
import { PlantSettingsContext } from "../../context/PlantSettings";
interface Props {
  open: boolean;
  close: (refresh: boolean) => void;
}

const NewProductionData: React.FunctionComponent<Props> = (props) => {
  const [platSettings] = useContext(PlantSettingsContext);
  const [schema, setSchema] = React.useState<any>(null);

  useEffect(() => {
    if (typeof platSettings === "object") {
      console.log("settings", platSettings);
      setSchema(platSettings?.PRODUCTION_INPUT_FORM);
    }
  }, [platSettings]);

  const formikRef = React.useRef<any>(null);

  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>New Production Data</DialogTitle>
      {schema && (
        <Box>
          <DialogContent>
            <Formik
              innerRef={formikRef}
              initialValues={schema?.initial_value || {}}
              validationSchema={buildYup(
                schema?.validation_schema?.schema || {}
              )}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              {({
                submitForm,
                isSubmitting,
                values,
                setFieldValue,
                errors,
              }) => {
                return (
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Form
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "20px",
                      }}
                    >
                      {schema.form.map((item: any, index: number) => {
                        switch (item.type) {
                          case "select":
                            return (
                              <Field
                                key={item.field}
                                fullWidth
                                style={{
                                  marginBottom: 10,
                                }}
                                component={Select}
                                name={item.field}
                                label={item.label}
                              >
                                {item.options?.map((option: any) => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </Field>
                            );
                          case "text":
                            return (
                              <Field
                                key={item.field}
                                fullWidth
                                component={TextField}
                                name={item.field}
                                style={{
                                  marginBottom: 10,
                                }}
                                label={item.label}
                                type={item.type}
                              />
                            );
                          case "number":
                            return (
                              <Field
                                key={item.field}
                                component={TextField}
                                name={item.field}
                                fullWidth
                                style={{
                                  marginBottom: 10,
                                }}
                                label={item.label}
                                type={item.type}
                              />
                            );
                          case "duration":
                            return (
                              <TimeDurationInput
                                label={item.label}
                                // @ts-ignore
                                error={errors[item.field] ? true : false}
                                key={item.field}
                                onChange={(value: number) => {
                                  setFieldValue(item.field, value);
                                }}
                                // @ts-ignore
                                value={
                                  typeof values[item.field] === "number"
                                    ? values[item.field] * 1000
                                    : values[item.field]
                                }
                              />
                            );
                          case "date":
                            return (
                              <Field
                                inputFormat="dd/MM/yyyy"
                                key={item.field}
                                component={DatePicker}
                                name={item.field}
                                fullWidth
                                style={{
                                  marginBottom: 10,
                                }}
                                label={item.label}
                              />
                            );
                        }
                      })}
                    </Form>
                  </LocalizationProvider>
                );
              }}
            </Formik>
          </DialogContent>
          <DialogActions>
            <Button
              color="success"
              onClick={() => formikRef.current?.submitForm()}
            >
              {formikRef.current?.isSubmitting && (
                <CircularProgress size={17} style={{ marginRight: 10 }} />
              )}
              save
            </Button>
            <Button onClick={() => props.close(false)}>Cancel</Button>
          </DialogActions>
        </Box>
      )}
    </Dialog>
  );
};

export default NewProductionData;
