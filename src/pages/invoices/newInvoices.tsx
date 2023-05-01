import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  useCreateInvoiceMutation,
  useCreateSectionMutation,
  useCreateSpareMutation,
  useGetSpareCatagoryDropdownQuery,
  useSpareDropdownQuery,
} from "../../generated";
import CancelIcon from "@mui/icons-material/Cancel";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { toast } from "react-toastify";
import { Box, MenuItem } from "@mui/material";
import { DatePicker, DateTimePicker } from "formik-mui-x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface Props {
  open: boolean;
  close: (refresh: boolean) => void;
}

const NewMaintenance: React.FunctionComponent<Props> = (props) => {
  const [createSpare, { data, error, loading }] = useCreateInvoiceMutation();
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>New Spare</DialogTitle>
      <Formik
        initialValues={{
          number: "",
          invoice_date: new Date(),
          invoice_items: [],
        }}
        validationSchema={yup.object().shape({
          number: yup.string().required("required"),
          invoice_date: yup.date().required("required"),
          invoice_items: yup.array().required("required"),
        })}
        onSubmit={async (values) => {
          await createSpare({
            variables: {
              createInvoiceInput: {
                invoice_date: new Date(values.invoice_date).toISOString(),
                number: values.number,
                total: values.invoice_items.reduce(
                  (a: any, b: any) => a + b.quantity * b.unit_price,
                  0
                ),
                invoice_items: {
                  createMany: {
                    data: values.invoice_items.map((data: any) => {
                      return {
                        item_id: data.catagory,
                        amount: data.quantity * data.unit_price,
                        quantity: data.quantity,
                        unit_price: data.unit_price,
                      };
                    }),
                  },
                },
              },
            },
          })
            .then((res) => {
              if (res.data?.createInvoice.id) {
                toast.success("spare created successfully");
                props.close(true);
              }
            })
            .catch(() => {
              toast.error("something went wrong");
            });
        }}
      >
        {({ submitForm, setFieldValue, values }) => {
          return (
            <>
              <DialogContent>
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                  }}
                >
                  <Field
                    component={TextField}
                    type="text"
                    fullWidth
                    style={{ marginTop: "20px" }}
                    label="invoice number"
                    name="number"
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Field
                      component={DatePicker}
                      fullWidth
                      label="date"
                      name="date"
                    />
                  </LocalizationProvider>
                  <InputCategory
                    setFieldValue={setFieldValue}
                    values={values.invoice_items}
                  />
                </Form>
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

const InputCategory = (props: {
  setFieldValue: (field: string, value: any) => void;
  values: {
    catagory: number;
    quantity: number;
    unit_price: number;
  }[];
}) => {
  const { data: MeachineCatagoriesDropdown } = useSpareDropdownQuery();

  return (
    <Formik
      onSubmit={(values, { resetForm }) => {
        props.setFieldValue("invoice_items", [
          ...props.values,
          {
            catagory: parseInt(`${values.catagory}`),
            quantity: parseFloat(`${values.quantity}`),
            unit_price: parseFloat(`${values.unit_price}`),
          },
        ]);
        resetForm();
      }}
      initialValues={{
        catagory: 0,
        quantity: 0,
        unit_price: 0,
      }}
      validationSchema={yup.object().shape({
        catagory: yup.number().required("required"),
        quantity: yup.number().required("required"),
        unit_price: yup.number().required("required"),
      })}
    >
      {({ submitForm }) => {
        return (
          <>
            <Form
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Field
                  component={Select}
                  fullWidth
                  label="category"
                  name="catagory"
                >
                  {MeachineCatagoriesDropdown?.items.map((data) => {
                    return (
                      <MenuItem key={data.value} value={data.value}>
                        {data.label}
                      </MenuItem>
                    );
                  })}
                </Field>
              </Box>

              <Field
                style={{ width: "25%" }}
                component={TextField}
                type="number"
                fullWidth
                label="quantity"
                name="quantity"
              />

              <Field
                style={{ width: "25%" }}
                component={TextField}
                type="number"
                fullWidth
                label="unit price"
                name="unit_price"
              />
              <Button
                onClick={() => submitForm()}
                name="add"
                variant="contained"
                color="success"
              >
                add
              </Button>
              <Box />
            </Form>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    border: "1px solid #e0e0e0",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <Box>item</Box>
                  <Box>quantity</Box>
                  <Box>unit price</Box>
                  <Box>total</Box>
                  <Button
                    style={{ visibility: "hidden" }}
                    endIcon={<CancelIcon />}
                  />
                </Box>
                {props.values.map((data: any, index: number) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        border: "1px solid #e0e0e0",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <Box>
                        {
                          MeachineCatagoriesDropdown?.items.find(
                            (d) => d.value === parseInt(data.catagory)
                          )?.label
                        }
                      </Box>
                      <Box>{data.quantity}</Box>
                      <Box>{data.unit_price}</Box>
                      <Box>{data.quantity * data.unit_price}</Box>
                      <Button
                        onClick={() => {
                          props.setFieldValue("invoice_items", [
                            ...props.values.filter(
                              (item: any, i: number) => i !== index
                            ),
                          ]);
                        }}
                        endIcon={<CancelIcon />}
                      />
                    </Box>
                  );
                })}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    border: "1px solid #e0e0e0",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <Box
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Total
                  </Box>
                  <Box
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    INR{" "}
                    {props.values.reduce((a: any, b: any) => {
                      return a + b.quantity * b.unit_price;
                    }, 0)}
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        );
      }}
    </Formik>
  );
};
