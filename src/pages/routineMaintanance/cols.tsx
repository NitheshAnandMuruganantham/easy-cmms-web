import {
  GridColumns,
  GridFilterInputMultipleSingleSelect,
  GridFilterInputMultipleValue,
  GridFilterInputValue,
  GridRenderCellParams,
  getGridStringOperators,
} from "@mui/x-data-grid";
import cronstrue from "cronstrue";
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
    field: "duration",
    headerName: "Duration",
    flex: 1,
    type: "number",
    filterable: false,
  },
  {
    field: "cron",
    headerName: "Run At",
    flex: 1,
    type: "string",
    filterable: false,
    valueFormatter(params) {
      return cronstrue.toString(params.value);
    },
  },
  {
    field: "meachine",
    headerName: "Machine",
    flex: 2,
    valueFormatter(params) {
      return `${params.value.label} (#${params.value?.id})`;
    },
    sortable: false,
  },
  {
    field: "assignee",
    flex: 1,
    headerName: "assigned to",
    valueFormatter(params) {
      return `${params.value.name} (${params.value?.id})`;
    },
    sortable: false,
  },
];

export default columns;
