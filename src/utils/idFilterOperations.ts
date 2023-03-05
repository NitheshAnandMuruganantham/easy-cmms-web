import {
  GridFilterInputMultipleValue,
  GridFilterInputValue,
} from "@mui/x-data-grid";

export const getIdFIlters: any = () => {
  return [
    {
      label: "equals",
      value: "equals",
      getApplyFilterFn: (filterItem: any) => {
        if (filterItem.value == null || Number.isNaN(filterItem.value)) {
          return null;
        }

        return ({ value }: any) => {
          return parseInt(value) === filterItem.value;
        };
      },
      InputComponent: GridFilterInputValue,
      InputComponentProps: {
        type: "number",
      },
    },
    {
      label: "in",
      value: "in",
      getApplyFilterFn: (filterItem: { value: number[] }) => {
        if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
          return null;
        }

        return ({ value }: any) => {
          return value != null && filterItem.value.includes(Number(value));
        };
      },
      InputComponent: GridFilterInputMultipleValue,
      InputComponentProps: {
        type: "number",
      },
    },
  ];
};
