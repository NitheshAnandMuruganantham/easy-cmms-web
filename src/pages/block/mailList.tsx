import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React from "react";
import { useUpdateBlockMutation } from "../../generated";
import { toast } from "react-toastify";
interface Props {
  open: boolean;
  close: (refetch: boolean) => void;
  mailList: string[];
  blockId: number;
}

const MailList: React.FunctionComponent<Props> = (props) => {
  const [update] = useUpdateBlockMutation();
  const [data, setData] = React.useState<string[]>(props.mailList || []);
  const [field, setField] = React.useState<string>("");
  return (
    <Dialog open={props.open} onClose={close}>
      <DialogTitle>Critical Mailing List</DialogTitle>
      <DialogContent>
        <Box>
          <Box
            style={{
              display: "flex",
            }}
          >
            <TextField
              label="email"
              type="email"
              size="medium"
              style={{
                width: 300,
              }}
              onChange={(e) => {
                setField(e.target.value);
              }}
              value={field}
            />
            <Button
              variant="contained"
              style={{
                marginLeft: 10,
              }}
              onClick={(e) => {
                setField("");
                setData([...data, field]);
              }}
            >
              Add
            </Button>
          </Box>
          <Table
            style={{
              marginBottom: 20,
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            {data.map((mail) => (
              <TableRow>
                <TableCell>{mail}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setData(data.filter((m) => m !== mail));
                    }}
                  >
                    delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={async () => {
            await update({
              variables: {
                updateBlockId: props.blockId,
                updateBlockInput: {
                  Mailings: {
                    set: data,
                  },
                },
              },
            })
              .then(() => {
                toast.success("Updated");
                props.close(true);
              })
              .catch((e) => {
                toast.error("something went wrong");
              });
          }}
        >
          save
        </Button>
        <Button
          onClick={() => {
            props.close(false);
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MailList;
