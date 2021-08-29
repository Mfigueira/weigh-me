import { useTypedSelector } from '../../../hooks/useTypedSelector';
import {
  DataGrid,
  GridToolbarContainer,
  GridFilterToolbarButton,
  GridToolbarExport,
  GridCellParams,
} from '@material-ui/data-grid';
import ZeroStateGrid from './ZeroStateGrid';
import EditWeighingButton from './EditWeighingButton';
import { monthsFilterOperators } from './MonthsFilter';
import {
  getMonthFromDate,
  formatDateTimeOrGetNow,
} from '../../../util/helpers';
import classes from './WeighingsGrid.module.scss';

const CustomToolbar: React.FC = () => (
  <GridToolbarContainer className={classes.toolbar}>
    <GridFilterToolbarButton />
    <GridToolbarExport />
  </GridToolbarContainer>
);

const WeighingsGrid: React.FC = () => {
  const weighings = useTypedSelector((state) => state.weighings);

  const rows = weighings.map((weighing) => ({
    ...weighing,
    datetime: new Date(weighing.datetime),
    month: getMonthFromDate(weighing.datetime),
  }));

  const columns = [
    {
      field: 'datetime',
      type: 'dateTime',
      headerName: 'Date & Time',
      flex: 1.5,
      headerClassName: classes.th,
    },
    {
      field: 'month',
      type: 'string',
      headerName: 'Month',
      hide: true,
      headerClassName: classes.th,
      filterOperators: monthsFilterOperators,
    },
    {
      field: 'weight',
      type: 'string',
      headerName: 'Weight (kg)',
      flex: 1,
      headerClassName: classes.th,
      renderCell: (params: GridCellParams) => (
        <div className={classes.weight}>
          {params.value}
          <EditWeighingButton
            id={Number(params.id)}
            weight={Number(params.value)}
            datetime={formatDateTimeOrGetNow(params.row.datetime)}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <h2>My Weighings</h2>

      <DataGrid
        autoHeight
        rows={rows}
        rowHeight={35}
        columns={columns}
        disableColumnMenu
        disableColumnSelector
        disableSelectionOnClick
        components={{
          NoRowsOverlay: ZeroStateGrid,
          Toolbar: CustomToolbar,
        }}
        pagination
        pageSize={10}
        className={`${classes.grid} ${!weighings.length ? classes.zero : ''}`}
      />
    </>
  );
};

export default WeighingsGrid;
