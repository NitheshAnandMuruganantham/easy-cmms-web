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
  CircularProgress,
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
        console.log(res.data);
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

  if (cardDataLoading) {
    return (
      <Box
        style={{
          display: "flex",
          marginTop: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={250} title="Loading the Dashboard" />
      </Box>
    );
  } else {
    return (
      <Box>
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
}
export default Home;
