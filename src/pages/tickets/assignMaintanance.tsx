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
  useUsersDropDownQuery,
  Ticket,
} from "../../generated";
import * as yup from "yup";
import LinearProgress from "@mui/material/LinearProgress"
import CircularProgress from "@mui/material/CircularProgress"
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
import { DateTimePicker } from "formik-mui-x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";
import { client } from "../../utils/apollo";
interface Props {
  open: boolean;
  close: () => void;
  data: Ticket
}

const AssignMaintenance: React.FunctionComponent<Props> = (props) => {
  const [createMaintanance] =
    useCreateMaintananceMutation();
  const { data: MachinesDropdown } = useGetAllMachinesDropdownQuery();
  const { data: UsersDropdown } = useUsersDropDownQuery();
  if(!props.open){
    return null
  } else
  return (
    <Dialog fullWidth open={props.open} onClose={close}>
      <DialogTitle> Assign Maintance For Ticket #{props.data.id}</DialogTitle>
      <Formik
        initialValues={{
          name: "",
          description: "",
          from: new Date(),
          to: new Date(),
          user: "",
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
          description: yup.string().required(),
          user: yup.string().required(),
          from: yup.date().required(),
          to: yup.date().required(),
        })}
        onSubmit={async (values) => {
          console.log("data",props.data)
          await createMaintanance({
            variables: {
              createMaintananceInput: {
                ticket: {
                  connect: {
                    id: props.data.id,
                  },
                },
                name: values.name,
                description: values.description,
                un_planned: false,
                from: values.from.toISOString(),
                to: values.to.toISOString(),
                resolved: false,
                machines: {
                  connect: {
                    id: props.data.machine.id,
                  },
                },
                assignee: {
                  connect: {
                    id: values.user,
                  },
                },
              },
            },
          })
          .then((res) => {
            if(res.data?.createMaintanance){
              toast.success("maintenance added successfully 🚀");
            }
          })
          .catch(() => {
            toast.error("something went wrong 🤯");
          })
          client.refetchQueries({
            include: ["Tickets", "ticketsCount"],
          });
          props.close();
        }}
      >
        {({ submitForm, values,isSubmitting }) => {
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
                    label="description"
                    name="description"
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Field
                      fullWidth
                      minDateTime={new Date()}
                      component={DateTimePicker}
                      label="from"
                      name="from"
                    />
                    <Field
                      fullWidth
                      minDateTime={new Date(values.from)}
                      component={DateTimePicker}
                      label="to"
                      name="to"
                    />
                    <Field
                      fullWidth
                      component={Select}
                      label="machine"
                      name="machine"
                    >
                      {MachinesDropdown?.machines ? MachinesDropdown?.machines.map((data) => {
                        return (
                          <MenuItem key={data.value} value={data.value}>
                            {data.label}
                          </MenuItem>
                        );
                      }): <LinearProgress/>}
                    </Field>
                    <Field
                      fullWidth
                      component={Select}
                      label="user"
                      name="user"
                    >
                      {UsersDropdown?.users ? UsersDropdown?.users.map((data) => {
                        return (
                          <MenuItem key={data.value} value={data.value}>
                            {data.name} - ({data.phone})
                          </MenuItem>
                        );
                      }) : <LinearProgress/>}
                    </Field>
                  </LocalizationProvider>
                </Form>
              </DialogContent>
              <DialogActions>
                <Button disabled={isSubmitting} color="success" onClick={() => submitForm()}>
                {isSubmitting && <CircularProgress size={17} style={{marginRight:3}}/>}
                 save
                </Button>
                <Button onClick={() => props.close()}>Cancel</Button>
              </DialogActions>
            </>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default AssignMaintenance;
