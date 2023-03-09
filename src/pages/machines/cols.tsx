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
    headerName:'catagory',
    field: "machine_catagory",
    flex: 1,
    valueFormatter(params) {
      return `${params.value?.name}`;
    },
    sortable: false,
  },
  {
    field: "section",
    flex: 1,
    headerName: "section",
    valueFormatter(params) {
      return `${params.value?.name}`;
    },
    sortable: false,
  },
  {
    field: "block",
    flex: 0.5,
    headerName: "block",
    valueFormatter(params) {
      return `${params.value?.name}`;
    },
    sortable: false,
  },

  
];

export default columns;
