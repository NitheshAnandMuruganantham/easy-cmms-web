import { GridFilterInputDate } from "@mui/x-data-grid";

const dateRegex = /(\d+)-(\d+)-(\d+)/;
const dateTimeRegex = /(\d+)-(\d+)-(\d+)T(\d+):(\d+)/;

function buildApplyFilterFn(
  filterItem: any,
  compareFn: any,
  showTime: any,
  keepHours?: any
) {
  if (!filterItem.value) {
    return null;
  }

  const [year, month, day, hour, minute] = filterItem.value
    .match(showTime ? dateTimeRegex : dateRegex)
    .slice(1)
    .map(Number);
  const time = new Date(year, month - 1, day, hour || 0, minute || 0).getTime();
  return ({ value }: any) => {
    if (!value) {
      return false;
    }

    const valueAsDate =
      value instanceof Date ? value : new Date(value.toString());

    if (keepHours) {
      return compareFn(valueAsDate.getTime(), time);
    } // Make a copy of the date to not reset the hours in the original object

    const dateCopy =
      value instanceof Date ? new Date(valueAsDate) : valueAsDate;
    const timeToCompare = dateCopy.setHours(
      showTime ? valueAsDate.getHours() : 0,
      showTime ? valueAsDate.getMinutes() : 0,
      0,
      0
    );
    return compareFn(timeToCompare, time);
  };
}

export const getGridDateOperators = (showTime: any) => [
  {
    value: "not",
    getApplyFilterFn: (filterItem: any) => {
      return buildApplyFilterFn(
        filterItem,
        (value1: any, value2: any) => value1 !== value2,
        showTime
      );
    },
    InputComponent: GridFilterInputDate,
    InputComponentProps: {
      type: showTime ? "datetime-local" : "date",
    },
  },
  {
    label: "On or after",
    value: "gte",
    getApplyFilterFn: (filterItem: any) => {
      return buildApplyFilterFn(
        filterItem,
        (value1: any, value2: any) => value1 >= value2,
        showTime
      );
    },
    InputComponent: GridFilterInputDate,
    InputComponentProps: {
      type: showTime ? "datetime-local" : "date",
    },
  },

  {
    label: "On or before",
    value: "lte",
    getApplyFilterFn: (filterItem: any) => {
      return buildApplyFilterFn(
        filterItem,
        (value1: any, value2: any) => value1 <= value2,
        showTime
      );
    },
    InputComponent: GridFilterInputDate,
    InputComponentProps: {
      type: showTime ? "datetime-local" : "date",
    },
  },
];
