import React from "react";
import InputProduction from "./inputProduction";
import { Button } from "@mui/material";

const Production = () => {
  const [data, setData] = React.useState<any>([]);
  const [InputOpen, setInputOpen] = React.useState(false);
  return (
    <div>
      <Button variant="contained" onClick={() => setInputOpen(true)}>
        Input Production
      </Button>
      <InputProduction
        close={() => {
          setInputOpen(false);
        }}
        open={InputOpen}
      />
    </div>
  );
};

export default Production;
