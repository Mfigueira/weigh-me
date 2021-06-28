import './WeighingsGrid.scss';
import { EditWeighing } from './custom/EditWeighing';
import { NoWeighingsOverlay } from './custom/NoWeighingsOverlay';
import { monthsFilterOperators } from './custom/MonthsFilter.js';
import {
  DataGrid,
  GridToolbarContainer,
  GridFilterToolbarButton,
  GridToolbarExport,
} from '@material-ui/data-grid';
import { getMonthFromDate, formatDateTimeOrGetNow } from '../../util/helpers';
import { useContext } from 'react';
import AppContext from '../../store/app-context';

export const WeighingsGrid = () => {
  const ctx = useContext(AppContext);
  const rows = ctx.weighings.map(weighing => ({
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
      renderCell: params => (
        <div
          style={{ textAlign: 'center', width: '100%', position: 'relative' }}
        >
          {params.value}
          <EditWeighing
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
        className={!ctx.weighings.length ? 'zero-state-grid' : ''}
      />
    </>
  );
};
