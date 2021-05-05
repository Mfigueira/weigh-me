import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { monthNames } from '../../../util/helpers';

const CustomMonthsFilter = (props) => {
  const { item, applyValue } = props;

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    applyValue({ ...item, value: value });
  };

  return (
    <FormControl>
      <InputLabel shrink htmlFor="custom-months-filter">
        Select month/s
        </InputLabel>
      <Select
        multiple
        native
        value={item.value}
        onChange={handleChangeMultiple}
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
}

CustomMonthsFilter.propTypes = {
  applyValue: PropTypes.func.isRequired,
  item: PropTypes.shape({
    columnField: PropTypes.string,
    id: PropTypes.number,
    operatorValue: PropTypes.string,
    value: PropTypes.array,
  }).isRequired,
};

export const monthsFilterOperators = [
  {
    label: 'is',
    value: 'is',
    getApplyFilterFn: (filterItem, column) => {
      if (
        !filterItem.columnField ||
        !filterItem.value ||
        !filterItem.operatorValue
      ) {
        return null;
      }

      return (params) => {
        const rowValue = column.valueGetter
          ? column.valueGetter(params)
          : params.value;
        return filterItem.value.indexOf(rowValue) >= 0;
      };
    },
    InputComponent: CustomMonthsFilter,
    InputComponentProps: { type: 'array' },
  }
];