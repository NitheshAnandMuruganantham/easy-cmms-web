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
  {
    field: "_count",
    headerName: "Machine count",
    flex: 0.5,
    type: "string",
    filterable: false,
    sortable: false,
    valueGetter(params) {
      return params?.value?.machines
    },
  },
];

export default columns;
