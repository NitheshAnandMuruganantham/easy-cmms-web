import { GridFilterInputMultipleSingleSelect } from "@mui/x-data-grid";

const parseObjectValue = (value: any) => {
  if (value == null || typeof value !== "object") {
    return value;
  }

  return value.value;
};

export const singleSelectFilterOperations = () => [
  {
    label: "in",
    value: "in",
    getApplyFilterFn: (filterItem: any) => {
      if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
        return null;
      }

      const filterItemValues = filterItem.value.map(parseObjectValue);
      return ({ value }: any) =>
        filterItemValues.includes(parseObjectValue(value));
    },
    InputComponent: GridFilterInputMultipleSingleSelect,
  },
  {
    label: "not in",
    value: "notIn",
    getApplyFilterFn: (filterItem: any) => {
      if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
        return null;
      }

      const filterItemValues = filterItem.value.map(parseObjectValue);
      return ({ value }: any) =>
        filterItemValues.includes(parseObjectValue(value));
    },
    InputComponent: GridFilterInputMultipleSingleSelect,
  },
];
