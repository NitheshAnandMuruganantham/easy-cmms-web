import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

import {
  SortOrder,
  useMaintenanceQuery,
  useTicketsQuery,
} from "../../generated";
import axios from "../../utils/axios";
function Home() {
  const { data: maintenanceOngoing } = useMaintenanceQuery({
    variables: {
      limit: 10,
      orderBy: {
        created_at: SortOrder.Desc,
      },
    },
  });
  const { data: tickets } = useTicketsQuery({
    variables: {
      take: 10,
      orderBy: {
        created_at: SortOrder.Desc,
      },
    },
  });

  const [lastFiveDayTickets, setLastFiveDayTickets] = React.useState([]);
  const [lastFiveDayMaintenances, setLastFiveDayMaintenances] = React.useState(
    []
  );

  React.useEffect(() => {
    axios.get("/dashboard/lastFiveDayTickets").then((res) => {
      setLastFiveDayTickets(res.data);
    });
  }, []);
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box
          style={{
            borderColor: "gray",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 5,
            height: "200px",
            overflowX: "auto",
            width: "49%",
            marginRight: "10px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "10px",
              marginTop: "5px",
            }}
          >
            Recent Tickets
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                <TableCell>raised by</TableCell>
                <TableCell>machine</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets?.tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell>{ticket.name}</TableCell>
                  <TableCell>{ticket.user.name}</TableCell>
                  <TableCell>{ticket.machine.label}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Box
          style={{
            borderColor: "gray",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 5,
            height: "200px",
            overflowX: "auto",
            width: "50%",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "10px",
              marginTop: "5px",
            }}
          >
            Ongoing plant maintenances
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                <TableCell>assignee</TableCell>
                <TableCell>machine</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {maintenanceOngoing?.maintenances.map((maintenance) => (
                <TableRow key={maintenance.id}>
                  <TableCell>{maintenance.name}</TableCell>
                  <TableCell>{maintenance.assignee.name}</TableCell>
                  <TableCell>{maintenance.machine.label}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>

      <Box
        style={{
          display: "flex",
        }}
      >
        <Box
          style={{
            marginTop: "10px",
            marginRight: "3%",
            display: "flex",
            justifyContent: "center",
            height: "300px",
            borderStyle: "solid",
            borderRadius: 5,
            borderColor: "gray",
            borderWidth: 1,
            width: "50%",
          }}
        >
          <ResponsiveContainer width="90%" height="100%">
            <BarChart data={lastFiveDayTickets} barSize={30}>
              <Bar type="monotone" dataKey="count" fill="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box
          style={{
            marginTop: "10px",
            marginRight: "3%",
            display: "flex",
            justifyContent: "center",
            height: "300px",
            borderStyle: "solid",
            borderColor: "gray",
            borderRadius: 5,
            borderWidth: 1,
            width: "50%",
          }}
        >
          <ResponsiveContainer width="90%" height="100%">
            <BarChart data={lastFiveDayTickets} barSize={30}>
              <Bar type="monotone" dataKey="count" fill="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
