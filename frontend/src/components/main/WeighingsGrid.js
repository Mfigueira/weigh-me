import '../../assets/styles/Weighings.css';
import { getMonthFromDate, extractSecsFromTime } from '../../util/helpers';
import { DataGrid, GridToolbarContainer, GridFilterToolbarButton, GridToolbarExport } from '@material-ui/data-grid';
import { monthsFilterOperators } from './custom/CustomMonthsFilter.js';
import { CustomEditSwitch } from './custom/CustomEditSwitch';
import { CustomNoWeighingsOverlay } from './custom/CustomNoWeighingsOverlay';

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridFilterToolbarButton />
      <GridToolbarExport />
      <CustomEditSwitch />
    </GridToolbarContainer>
  );
}

export const WeighingsGrid = ({ weighings }) => {

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
    <DataGrid
      autoHeight
      rows={rows}
      rowHeight={35}
      columns={columns}
      sortModel={[{
        field: 'dtshow',
        sort: 'desc',
      }]}
      disableColumnMenu={true}
      disableColumnSelector={true}
      disableSelectionOnClick
      components={{
        NoRowsOverlay: CustomNoWeighingsOverlay,
        Toolbar: CustomToolbar
      }}
      pagination
      pageSize={25}
      className={!weighings.length && 'zero-state-grid'}
    />
  )
}