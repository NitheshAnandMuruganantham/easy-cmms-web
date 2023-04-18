import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  useSectionsDropdownQuery,
  useMeachineCatagoryDropdownQuery,
  useUpdateMachineMutation,
} from "../../generated";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { DateTimePicker } from "formik-mui-x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";

interface Props {
  open: boolean;
  data?: any;
  close: (refresh: boolean) => void;
}

const EditMachine: React.FunctionComponent<Props> = (props) => {
  const [updateMachine, { data, error, loading }] = useUpdateMachineMutation();
  const { data: SectionDropdown } = useSectionsDropdownQuery();
  const { data: MeachineCatagoriesDropdown } =
    useMeachineCatagoryDropdownQuery();
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle>Update Machine </DialogTitle>
      <Formik
        initialValues={{
          ...props.data,
          code: props.data?.profile?.asset_code,
          section: props.data?.section?.id,
          category: props.data?.machine_catagory?.id,
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
          section: yup.string().required(),
          category: yup.string().required(),
          code: yup.string().required(),
        })}
        onSubmit={async (values) => {
          await updateMachine({
            variables: {
              updateMachineId: props.data.id,
              updateMachineInput: {
                name: {
                  set: values.name,
                },
                profile: {
                  asset_code: values.code,
                },
                section: {
                  connect: {
                    id: values.section,
                  },
                },
                machine_catagory: {
                  connect: {
                    id: values.category,
                  },
                },
                priority: {
                  set: 1,
                },
                label: {
                  set: `${values.code} - ${values.name}`,
                },
              },
            },
          })
            .then((res) => {
              if (res.data?.updateMachine) {
                toast.success("machine created successfully");
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
                    style={{ marginTop: "20px" }}
                    label="asset code"
                    name="code"
                  />

                  <Field
                    fullWidth
                    component={Select}
                    label="category"
                    name="category"
                  >
                    {MeachineCatagoriesDropdown?.machineCatagories.map(
                      (data) => {
                        return (
                          <MenuItem key={data.value} value={data.value}>
                            {data.name}
                          </MenuItem>
                        );
                      }
                    )}
                  </Field>
                  <Field
                    fullWidth
                    component={Select}
                    label="section"
                    name="section"
                  >
                    {SectionDropdown?.sections.map((data) => {
                      return (
                        <MenuItem key={data.value} value={data.value}>
                          {data.name}
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

export default EditMachine;
