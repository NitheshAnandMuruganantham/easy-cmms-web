import {
  GridColumns,
  GridFilterInputMultipleSingleSelect,
  GridFilterInputMultipleValue,
  GridFilterInputValue,
  GridRenderCellParams,
  getGridStringOperators,
} from "@mui/x-data-grid";
import { Ticket, Ticket_Status } from "../../generated";
import { getGridDateOperators } from "../../utils/dateFilterOpertors";
import Chip from "@mui/material/Chip";
import { getIdFIlters } from "../../utils/idFilterOperations";

const parseObjectValue = (value: any) => {
  if (value == null || typeof value !== "object") {
    return value;
  }

  return value.value;
};

const columns: GridColumns<any> = [
  {
    field: "id",
    headerName: "ID",
    width: 5,
    filterOperators: getIdFIlters(),
  },
  {
    field: "name",
    headerName: "Title",
    flex: 1,
    type: "string",
    filterOperators: getGridStringOperators().slice(0, -3),
  },
  {
    field: "description",
    headerName: "Description",
    flex: 2,
    type: "string",
    filterOperators: getGridStringOperators().slice(0, -3),
  },
  {
    field: "machines",
    headerName: "Machine",
    flex: 1,
    valueFormatter(params) {
      return `${params.value.label} (${params.value?.name})`;
    },
    sortable: false,
  },
  {
    field: "user",
    flex: 1,
    headerName: "user",
    valueFormatter(params) {
      return `${params.value.name} (${params.value?.id})`;
    },
    sortable: false,
  },
  {
    field: "status",
    headerName: "status",
    type: "singleSelect",
    filterOperators: [
      {
        label: "in",
        value: "in",
        getApplyFilterFn: (filterItem) => {
          if (
            !Array.isArray(filterItem.value) ||
            filterItem.value.length === 0
          ) {
            return null;
          }

          const filterItemValues = filterItem.value.map(parseObjectValue);
          return ({ value }) =>
            filterItemValues.includes(parseObjectValue(value));
        },
        InputComponent: GridFilterInputMultipleSingleSelect,
      },
      {
        label: "not in",
        value: "notIn",
        getApplyFilterFn: (filterItem) => {
          if (
            !Array.isArray(filterItem.value) ||
            filterItem.value.length === 0
          ) {
            return null;
          }

          const filterItemValues = filterItem.value.map(parseObjectValue);
          return ({ value }) =>
            filterItemValues.includes(parseObjectValue(value));
        },
        InputComponent: GridFilterInputMultipleSingleSelect,
      },
    ],
    valueOptions: ["OPEN", "CLOSED"],
    renderCell(params: GridRenderCellParams) {
      return (
        <Chip
          label={params.value}
          color={
            params.value === "CLOSED"
              ? "success"
              : params.value === "OPEN"
              ? "error"
              : "success"
          }
        />
      );
    },
    sortable: false,
  },
  {
    field: "created_at",
    headerName: "Created At",
    flex: 1,
    type: "dateTime",
    filterOperators: getGridDateOperators(true),
    valueFormatter(params) {
      return new Date(params.value).toLocaleString();
    },
  },
];

export default columns;
