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
import { singleSelectFilterOperations } from "../../utils/singleSelectFilterOperations";

const columns: GridColumns<any> = [
  {
    field: "id",
    headerName: "ID",
    width: 5,
    filterOperators: getIdFIlters(),
  },
  {
    field: "date",
    headerName: "date",
    flex: 1,
    type: "date",
    filterOperators: getGridDateOperators(false),
    valueFormatter(params) {
      return new Date(params.value).toLocaleDateString("en-GB");
    },
  },
  {
    field: "shift",
    headerName: "Shift",
    flex: 1,
    valueFormatter(params) {
      return `SHIFT ${params.value}`;
    },
  },
  {
    field: "updatedBy",
    headerName: "Updated By",
    flex: 1,
    sortable: false,
    filterable: false,
    valueFormatter(params) {
      return `${params.value.name} (#${params.value.id})`;
    },
  },
];

export default columns;
