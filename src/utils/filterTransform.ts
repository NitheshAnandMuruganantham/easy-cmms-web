import { GridFilterModel } from "@mui/x-data-grid";

export const filterTransform = (data: GridFilterModel) => {
  return data.items.map((item) => {
    const { columnField, operatorValue, value } = item;

    return {
      [columnField]: {
        [operatorValue || "equals"]: value,
      },
    };
  });
};
