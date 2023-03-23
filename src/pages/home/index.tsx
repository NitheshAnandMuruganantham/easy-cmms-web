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

// <Box
//   style={{
//     display: "flex",
//     flexDirection: "row",
//     width: "99%",
//     marginLeft: "auto",
//     marginRight: "auto",
//     justifyContent: "space-around",
//   }}
// >
//   <div
//     style={{
//       color: "black",
//       margin: "5px",
//       paddingTop: "20px",
//       paddingBottom: "20px",
//       flexDirection: "column",
//       width: "50%",
//       textAlign: "center",
//       alignItems: "center",
//       display: "flex",
//       justifyContent: "center",
//       backgroundColor: "whitesmoke",
//       borderRadius: "10px",
//     }}
//   >
//     <div style={{ marginBottom: "10px", fontSize: "large" }}>
//       <Typography
//         sx={{
//           textTransform: "capitalize",
//           textAlign: "center",
//           fontSize: "x-large",
//         }}
//       >
//         Shift Ends In
//       </Typography>
//     </div>
//     <div style={{ fontSize: "xxx-large", fontWeight: "bold" }}>10:55</div>
//   </div>
//   <div
//     style={{
//       color: "black",
//       margin: "5px",
//       paddingTop: "20px",
//       paddingBottom: "20px",
//       flexDirection: "column",
//       width: "50%",
//       textAlign: "center",
//       alignItems: "center",
//       display: "flex",
//       justifyContent: "center",
//       backgroundColor: "whitesmoke",
//       borderRadius: "10px",
//     }}
//   >
//     <div style={{ marginBottom: "10px", fontSize: "large" }}>
//       <Typography
//         sx={{
//           textTransform: "capitalize",
//           textAlign: "center",
//           fontSize: "x-large",
//         }}
//       ></Typography>
//     </div>
//     <div style={{ fontSize: "xxx-large", fontWeight: "bold" }}>
//       {/* {count} */}
//     </div>
//   </div>
// </Box>;
