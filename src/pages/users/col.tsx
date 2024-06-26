import {
  GridColumns,
  GridFilterInputMultipleSingleSelect,
  GridFilterInputMultipleValue,
  GridFilterInputValue,
  GridRenderCellParams,
  getGridStringOperators,
} from "@mui/x-data-grid";
import { Role, Ticket, Ticket_Status } from "../../generated";
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
    headerName: "name",
    flex: 1,
    type: "string",
    filterOperators: getGridStringOperators().slice(0, -3),
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 2,
    type: "string",
    filterOperators: getGridStringOperators().slice(0, -3),
  },
  {
    field: "block",
    headerName: "unit",
    flex: 2,
    type: "string",
    filterable: false,
    sortable: false,
    valueFormatter(params) {
      return `${params.value.name} (#${params.value.id})`;
    },
  },
  {
    field: "role_alias",
    headerName: "Role",
    flex: 1,
    type: "singleSelect",
    valueOptions: [
      Role.Admin,
      Role.Engineer,
      Role.Guest,
      Role.Manager,
      Role.Manager,
      Role.Supervisor,
      Role.Fitter,
    ],
    filterOperators: singleSelectFilterOperations(),
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
