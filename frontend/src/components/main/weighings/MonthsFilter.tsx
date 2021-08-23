import { InputLabel, FormControl, Select } from '@material-ui/core';
import {
  GridFilterItem,
  GridCellParams,
  GridFilterInputValueProps,
} from '@material-ui/data-grid';
import { monthNames } from '../../../util/helpers';

const MonthsFilter: React.FC<GridFilterInputValueProps> = ({
  item,
  applyValue,
}) => (
  <FormControl>
    <InputLabel shrink htmlFor="custom-months-filter">
      Month
    </InputLabel>
    <Select
      native
      value={item.value}
      onChange={(e: any) => applyValue({ ...item, value: e.target.value })}
      inputProps={{ id: 'custom-months-filter' }}
    >
      <option value="" selected disabled>
        Select
      </option>
      {monthNames.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </Select>
  </FormControl>
);

export const monthsFilterOperators = [
  {
    label: 'is',
    value: 'is',
    getApplyFilterFn: (filterItem: GridFilterItem, column: any) => {
      if (
        !filterItem.columnField ||
        !filterItem.value ||
        !filterItem.operatorValue
      ) {
        return null;
      }

      return (params: GridCellParams) => {
        const rowValue = column.valueGetter
          ? column.valueGetter(params)
          : params.value;
        return (filterItem?.value?.indexOf(rowValue) ?? -1) >= 0;
      };
    },
    InputComponent: MonthsFilter,
    InputComponentProps: { type: 'string' },
  },
];
