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
  { field: "name", headerName: "Title", flex: 1,type: "string", filterOperators:getGridStringOperators().slice(0,-3) },
  { field: "description", headerName: "Description", flex: 2,type: "string", filterOperators:getGridStringOperators().slice(0,-3) },
  {
    field: "machine",
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
  {
    field: "status",
    flex: 1,
    headerName: "status",
    type: "singleSelect",
    filterable: false,
    filterOperators: singleSelectFilterOperations(),
    valueOptions: ["ASSIGNED", "UNASSIGNED"],
    renderCell(params: GridRenderCellParams) {
      return (
        <Chip
          label={params.row.assignee ? "ASSIGNED" : "UN-ASSIGNED"}
          color={
            params.value === "ASSIGNED"
              ? "success"
              : params.value === "UN-ASSIGNED"
              ? "error"
              : "success"
          }
        />
      );
    },
    sortable: false,
  },
  {
    field: "resolved",
    flex: 1,
    headerName: "resolved",
    type: "boolean",
    filterable: false,
    renderCell(params: GridRenderCellParams) {
      return (
        <Chip
          label={params.value ? "RESOLVED" : "UN-RESOLVED"}
          color={params.value ? "success" : "error"}
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
  {
    field: "from",
    headerName: "From",
    flex: 1,
    type: "dateTime",
    filterOperators: getGridDateOperators(true),
    valueFormatter(params) {
      return new Date(params.value).toLocaleString();
    },
  },
  {
    field: "to",
    headerName: "To",
    flex: 1,
    type: "dateTime",
    filterOperators: getGridDateOperators(true),
    valueFormatter(params) {
      return new Date(params.value).toLocaleString();
    },
  },
];

export default columns;
