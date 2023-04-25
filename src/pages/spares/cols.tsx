import { GridColumns, getGridStringOperators } from "@mui/x-data-grid";
import { getIdFIlters } from "../../utils/idFilterOperations";

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
    field: "catagory",
    headerName: "category",
    filterable: false,
    sortable: false,
    flex: 0.5,
    type: "string",
    valueGetter: (params) =>
      `${params.row.catagory.name} (${params.row.catagory.id})`,
  },
  {
    field: "code",
    headerName: "item code",
    flex: 0.25,
    type: "string",
    filterOperators: getGridStringOperators().slice(0, -3),
  },
  {
    field: "quantity",
    headerName: "quantity",
    flex: 0.25,
    type: "string",
    filterOperators: getGridStringOperators().slice(0, -3),
  },
  {
    field: "unit_price",
    headerName: "unit price",
    flex: 0.25,
    type: "string",
    filterOperators: getGridStringOperators().slice(0, -3),
  },
];

export default columns;
