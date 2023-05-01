import { GridColumns } from "@mui/x-data-grid";
import { getIdFIlters } from "../../utils/idFilterOperations";
import { getGridDateOperators } from "../../utils/dateFilterOpertors";
const columns: GridColumns<any> = [
  {
    field: "id",
    headerName: "ID",
    width: 5,
    filterOperators: getIdFIlters(),
  },
  {
    field: "number",
    headerName: "Invoice Number",
    minWidth: 200,
    flex: 1,
    filterable: false,
    sortable: false,
  },
  {
    field: "invoice_date",
    headerName: "Invoice Date",
    minWidth: 200,
    valueFormatter: (params) => {
      return new Date(params.value).toLocaleDateString();
    },
    flex: 1,
    filterOperators: getGridDateOperators(false),
    sortable: false,
  },
  {
    field: "total",
    headerName: "Total Amount",
    minWidth: 200,
    flex: 1,
    filterable: false,
    sortable: false,
    valueFormatter: (params) => {
      return `INR ${params.value}`;
    },
  },
];

export default columns;
