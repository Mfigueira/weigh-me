import PropTypes from 'prop-types';
import { InputLabel, FormControl, Select } from '@material-ui/core';
import {
  GridCellParams,
  GridFilterItem,
  GridFilterInputValueProps,
} from '@material-ui/data-grid';
import { monthNames } from '../../../util/helpers';

const MonthsFilter: React.FC<GridFilterInputValueProps> = ({
  item,
  applyValue,
}) => {
  const handleChangeMultiple = (event: any) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    // applyValue({ ...item, value: value });
  };

  return (
    <FormControl>
      <InputLabel shrink htmlFor="custom-months-filter">
        Select month/s
      </InputLabel>
      <Select
        multiple
        native={true}
        value={item.value}
        onChange={(e) => console.log(e.target)}
        inputProps={{
          id: 'custom-months-filter',
        }}
      >
        {monthNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

// MonthsFilter.propTypes = {
//   applyValue: PropTypes.func.isRequired,
//   item: PropTypes.shape({
//     columnField: PropTypes.string,
//     id: PropTypes.number,
//     operatorValue: PropTypes.string,
//     value: PropTypes.array,
//   }).isRequired,
// };

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
        return filterItem?.value?.indexOf(rowValue) ?? -1 >= 0;
      };
    },
    InputComponent: MonthsFilter,
    InputComponentProps: { type: 'array' },
  },
];
