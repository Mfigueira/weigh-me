import '../../assets/styles/Weighings.css';
import { getMonthFromDate, extractSecsFromTime } from '../../util/helpers';
import { DataGrid, GridToolbar, GridOverlay } from '@material-ui/data-grid';
import { monthsFilterOperators } from './MonthsFilter.js';
import { WeighingChart } from './Chart';

const CustomNoRowsOverlay = () => {
  return (
    <GridOverlay>
      <p>No weighings to show</p>
    </GridOverlay>
  )
};

export const Weighings = ({ weighings }) => {

  const rows = weighings.map(weighing => {
    weighing.month = getMonthFromDate(weighing.datetime);
    weighing.dtshow = `${extractSecsFromTime(weighing.datetime).replace('T', ' at ')}`;
    return weighing;
  });

  const columns = [
    {
      field: 'dtshow', type: 'dateTime', headerName: 'Date & Time', flex: 1.5,
      headerClassName: 'weighing-grid-th', filterable: false
    },
    {
      field: 'datetime', type: 'dateTime', headerName: 'Date & Time', hide: true,
      headerClassName: 'weighing-grid-th'
    },
    {
      field: 'month', type: 'string', headerName: 'Month', hide: true,
      headerClassName: 'weighing-grid-th', filterOperators: monthsFilterOperators
    },
    {
      field: 'weight', type: 'string', headerName: 'Weight (kg)', flex: 1,
      headerClassName: 'weighing-grid-th'
    },
  ];

  return (
    <section>
      <h2 style={{ marginBottom: '0' }}>Chart</h2>
      <WeighingChart weighings={weighings} />

      <h2>Grid</h2>
      <DataGrid
        autoHeight
        rows={rows}
        rowHeight={35}
        columns={columns.map((column) => ({
          ...column,
          disableClickEventBubbling: true,
        }))}
        sortModel={[{
          field: 'dtshow',
          sort: 'desc',
        }]}
        disableColumnMenu={true}
        disableColumnSelector={true}
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
          Toolbar: GridToolbar
        }}
        pagination
        pageSize={25}
      />
    </section>
  )
}