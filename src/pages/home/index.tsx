import React from "react";
import {
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableRow,
} from "@mui/material";

import {
  SortOrder,
  useMaintenanceQuery,
  useTicketsQuery,
} from "../../generated";
import axios from "../../utils/axios";
import CounterCard from "../../components/CountCard";
import { useInterval } from "../../utils/reFetchQueries";
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

  const [cardData, setCardData] = React.useState<any>([]);
  const [cardDataLoading, setCardDataLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    setCardDataLoading(true);
    axios
      .get("/dashboard/getProductionDashboard")
      .then((res) => {
        setCardData(res.data);
        setCardDataLoading(false);
      })
      .catch((err) => {
        setCardDataLoading(false);
      });
  }, []);

  useInterval(() => {
    axios.get("/dashboard/getProductionDashboard").then((res) => {
      setCardData(res.data);
    });
  }, 50000);

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
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "10px",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(cardData).map((key: string) => {
          return (
            <CounterCard
              key={key}
              count={cardData[key]}
              label={key}
              loading={cardDataLoading}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default Home;
