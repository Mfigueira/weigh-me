import './WeighingsGrid.scss';
import { useContext } from 'react';
import EditWeighingButton from './EditWeighingButton';
import NoWeighingsOverlay from './NoWeighingsOverlay';
import { monthsFilterOperators } from './MonthsFilter';
import {
  DataGrid,
  GridToolbarContainer,
  GridFilterToolbarButton,
  GridToolbarExport,
  GridCellParams,
  GridColumns,
} from '@material-ui/data-grid';
import {
  getMonthFromDate,
  formatDateTimeOrGetNow,
} from '../../../util/helpers';
import { WeighingsContext } from '../../../store/WeighingsContext';

const WeighingsGrid: React.FC = () => {
  const { weighings } = useContext(WeighingsContext);

  const rows = weighings.map((weighing) => ({
    ...weighing,
    datetime: new Date(weighing.datetime),
    month: getMonthFromDate(weighing.datetime),
  }));

  const columns: GridColumns = [
    {
      field: 'datetime',
      type: 'dateTime',
      headerName: 'Date & Time',
      flex: 1.5,
      headerClassName: 'weighing-grid-th',
    },
    {
      field: 'month',
      type: 'string',
      headerName: 'Month',
      hide: true,
      headerClassName: 'weighing-grid-th',
      filterOperators: monthsFilterOperators,
    },
    {
      field: 'weight',
      type: 'string',
      headerName: 'Weight (kg)',
      flex: 1,
      headerClassName: 'weighing-grid-th',
      renderCell: (params: GridCellParams) => (
        <div
          style={{ textAlign: 'center', width: '100%', position: 'relative' }}
        >
          {params.value}
          <EditWeighingButton
            id={params.id}
            weight={params.value}
            datetime={formatDateTimeOrGetNow(params.row.datetime)}
          />
        </div>
      ),
    },
  ];

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridFilterToolbarButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };

  return (
    <>
      <h2>My Weighings</h2>

      <DataGrid
        autoHeight
        rows={rows}
        rowHeight={35}
        columns={columns}
        disableColumnMenu={true}
        disableColumnSelector={true}
        disableSelectionOnClick
        components={{
          NoRowsOverlay: NoWeighingsOverlay,
          Toolbar: CustomToolbar,
        }}
        pagination
        pageSize={25}
        className={!weighings.length ? 'zero-state-grid' : ''}
      />
    </>
  );
};

export default WeighingsGrid;
