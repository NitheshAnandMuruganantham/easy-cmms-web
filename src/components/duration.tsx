import { Box, TextField } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

const Duration: React.FunctionComponent<{
  value: any;
  label: string;
  onChange: (value: any) => void;
  error: boolean;
}> = (props) => {
  const [hours, SetHours] = React.useState(0);
  const [minutes, SetMinutes] = React.useState(0);

  return (
    <Box
      style={{
        border: `1px solid ${props.error ? "red" : "#ced4da"}`,
        borderRadius: "4px",
        display: "flex",
        paddingTop: "25px",
        paddingBottom: "25px",
        paddingLeft: "15px",
        paddingRight: "15px",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          fontSize: "small",
          position: "absolute",
          top: "-10px",
          padding: "0px 5px",
          backgroundColor: "white",
        }}
      >
        {props.label}
      </Typography>
      <TextField
        label="hours"
        onBlur={(e) => {
          if (e.target.value === "") {
            SetHours(0);
            props.onChange({ hours: 0, minutes: minutes });
          }
        }}
        error={props.error}
        style={{
          width: "60%",
        }}
        value={hours}
        onChange={(e: any) => {
          let hour = parseInt(e.target.value, 10);
          if (hour < 0) {
            hour = 0;
          }
          SetHours(hour);
          props.onChange({ hours: e.target.value, minutes: minutes });
        }}
        type="number"
      />
      <TextField
        onBlur={(e) => {
          if (e.target.value === "") {
            SetMinutes(0);
            props.onChange({ hours: hours, minutes: 0 });
          }
        }}
        error={props.error}
        label="minutes"
        style={{
          width: "35%",
        }}
        value={minutes}
        onChange={(e) => {
          let min = parseInt(e.target.value, 10);
          if (min < 0) {
            min = 0;
          }
          SetMinutes(min);
          if (min > 59) {
            SetMinutes(0);
            SetHours(hours + 1);
            props.onChange({ hours: hours + 1, minutes: 0 });
            return;
          }
          props.onChange({ hours: hours, minutes: e.target.value });
        }}
        type="number"
      />
    </Box>
  );
};

export default Duration;
