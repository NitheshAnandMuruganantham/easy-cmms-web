import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  useCreateSectionMutation,
  useCreateSpareMutation,
  useGetSpareCatagoryDropdownQuery,
} from "../../generated";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { toast } from "react-toastify";
import { MenuItem } from "@mui/material";

interface Props {
  open: boolean;
  close: (refresh: boolean) => void;
}

const NewMaintenance: React.FunctionComponent<Props> = (props) => {
  const [createSpare, { data, error, loading }] = useCreateSpareMutation();
  const { data: MeachineCatagoriesDropdown } =
    useGetSpareCatagoryDropdownQuery();
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>New Spare</DialogTitle>
      <Formik
        initialValues={{
          name: "",
          code: "",
          unit_price: 0,
          quantity: 0,
          catagory: {
            label: "select a category",
            value: undefined,
          },
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
          code: yup.string().required(),
          unit_price: yup.number().required(),
          quantity: yup.number().required(),
          catagory: yup.number().required(),
        })}
        onSubmit={async (values) => {
          await createSpare({
            variables: {
              createItemInput: {
                catagory: {
                  connect: {
                    id: values.catagory,
                  },
                },
                code: values.code,
                name: values.name,
                unit_price: values.unit_price,
                quantity: values.quantity,
              },
            },
          })
            .then((res) => {
              if (res.data?.createItem) {
                toast.success("spare created successfully");
                props.close(true);
              }
            })
            .catch(() => {
              toast.error("something went wrong");
            });
        }}
      >
        {({ submitForm }) => {
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
                    label="name"
                    name="name"
                  />
                  <Field
                    component={TextField}
                    type="text"
                    fullWidth
                    label="code"
                    name="code"
                  />
                  <Field
                    component={TextField}
                    type="number"
                    fullWidth
                    label="unit price"
                    name="unit_price"
                  />
                  <Field
                    component={TextField}
                    type="number"
                    fullWidth
                    label="quantity"
                    name="quantity"
                  />
                  <Field
                    fullWidth
                    component={Select}
                    label="category"
                    name="catagory"
                  >
                    {MeachineCatagoriesDropdown?.itemCatagories.map((data) => {
                      return (
                        <MenuItem key={data.value} value={data.value}>
                          {data.label}
                        </MenuItem>
                      );
                    })}
                  </Field>
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
