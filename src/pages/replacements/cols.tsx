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
    width: 20,
    filterOperators: getIdFIlters(),
  },
  {
    field: "name",
    headerName: "Title",
    flex: 2,
    minWidth: 200,
    type: "string",
    filterOperators: getGridStringOperators().slice(0, -3),
  },
  {
    field: "approved",
    width: 150,
    headerName: "status",
    type: "boolean",
    filterable: false,
    renderCell(params: GridRenderCellParams) {
      return (
        <Chip
          label={params.value ? "APPROVED" : "UN-APPROVED"}
          color={params.value ? "success" : "error"}
        />
      );
    },
    sortable: false,
  },
  {
    field: "created_at",
    width: 150,
    headerName: "Date / Time",
    type: "dateTime",
    filterOperators: getGridDateOperators(true),
    valueFormatter(params) {
      return new Date(params.value).toLocaleString();
    },
  },
  {
    field: "maintenance",
    headerName: "Maintenance",
    minWidth: 200,
    type: "string",
    filterable: false,
    sortable: false,
    valueGetter(params) {
      return `${params.row?.maintenance?.name} (${params.row?.maintenance?.id})`;
    },
  },
  {
    field: "requester",
    headerName: "Requester",
    flex: 0.5,
    minWidth: 200,
    type: "string",
    filterable: false,
    sortable: false,
    valueGetter(params) {
      return `${params.row?.maintenance?.assignee?.name} (${params.row?.maintenance?.assignee?.id})`;
    },
  },
  {
    field: "machine",
    headerName: "Machine",
    flex: 0.5,
    minWidth: 200,
    type: "string",
    filterable: false,
    sortable: false,
    valueGetter(params) {
      return `${params.row?.maintenance?.machine?.name} (${params.row?.maintenance?.machine?.id})`;
    },
  },
  {
    field: "section",
    headerName: "Section",
    flex: 0.5,
    minWidth: 200,
    type: "string",
    filterable: false,
    sortable: false,
    valueGetter(params) {
      return `${params.row?.maintenance?.machine?.section?.name} (${params.row?.maintenance?.machine?.section?.id})`;
    },
  },
  {
    field: "item",
    headerName: "Item",
    flex: 0.5,
    minWidth: 200,
    type: "string",
    filterable: false,
    sortable: false,
    valueGetter(params) {
      return `${params.row?.item?.name} (${params.row?.item?.id})`;
    },
  },
  {
    field: "item category",
    headerName: "Item Category",
    flex: 0.5,
    minWidth: 200,
    type: "string",
    filterable: false,
    sortable: false,
    valueGetter(params) {
      return `${params.row?.item?.catagory?.name} (${params.row?.item?.catagory?.id})`;
    },
  },
  {
    field: "quantity",
    headerName: "Quantity",
    flex: 0.5,
    minWidth: 200,
    type: "string",
    filterable: false,
    sortable: false,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 0.5,
    minWidth: 500,
    type: "string",
    filterable: false,
    sortable: false,
  },
];

export default columns;
