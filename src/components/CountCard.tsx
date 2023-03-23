import { CircularProgress, Typography } from "@mui/material";
import * as React from "react";

interface CounterCardProps {
  count: any;
  label: string;
  loading: boolean;
}

const CounterCard: React.FunctionComponent<CounterCardProps> = ({
  count,
  label,
  loading,
}) => {
  return (
    <div
      style={{
        color: "black",
        margin: "5px",
        paddingTop: "20px",
        paddingBottom: "20px",
        flexDirection: "column",
        width: "32%",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "whitesmoke",
        borderRadius: "10px",
      }}
    >
      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          <div style={{ marginBottom: "10px", fontSize: "large" }}>
            <Typography
              sx={{
                textTransform: "capitalize",
                textAlign: "center",
                fontSize: "x-large",
              }}
            >
              {label.replaceAll("_", " ")}
            </Typography>
          </div>
          <div style={{ fontSize: "xxx-large", fontWeight: "bold" }}>
            {count}
          </div>
        </>
      )}
    </div>
  );
};

export default CounterCard;
