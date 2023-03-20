import React from "react";

export const PlantSettingsContext = React.createContext<
  [any, (data: any) => void]
>([{}, () => {}]);
