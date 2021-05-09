import { useState } from 'react';
import editIcon from '../../assets/img/edit.svg';
import { getMonthFromDate, formatDateTimeOrGetToday } from '../../util/helpers';
import {
  DataGrid,
  GridToolbarContainer,
  GridFilterToolbarButton,
  GridToolbarExport
} from '@material-ui/data-grid';
import { monthsFilterOperators } from './custom/MonthsFilter.js';
import { NoWeighingsOverlay } from './custom/NoWeighingsOverlay';
import { Button } from '@material-ui/core';
import { EditModal } from './custom/EditModal';

export const WeighingsGrid = (
  {
    weighings, editWeighingFromState, removeWeighingFromState,
    token, alert, setAlert
  }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState('');
  const [editWeight, setEditWeight] = useState('');
  const [editDateTime, setEditDateTime] = useState('');

  const handleOpenModal = (id, weight, datetime) => {
    setEditId(id);
    setEditWeight(weight);
    setEditDateTime(formatDateTimeOrGetToday(datetime));
    setModalOpen(true);
  };

  const rows = weighings.map(weighing => (
    {
      ...weighing,
      datetime: new Date(weighing.datetime),
      month: getMonthFromDate(weighing.datetime)
    }
  ));

  const columns = [
    {
      field: 'datetime', type: 'dateTime', headerName: 'Date & Time', flex: 1.5,
      headerClassName: 'weighing-grid-th'
    },
    {
      field: 'month', type: 'string', headerName: 'Month', hide: true,
      headerClassName: 'weighing-grid-th', filterOperators: monthsFilterOperators
    },
    {
      field: 'weight', type: 'string', headerName: 'Weight (kg)', flex: 1,
      headerClassName: 'weighing-grid-th', renderCell: (params) => (
        <div style={{ textAlign: 'center', width: '100%', position: 'relative' }}>
          {params.value}
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
              position: 'absolute',
              right: '1px',
              top: '3px',
              minWidth: '0px',
              padding: '0',
              borderRadius: '50%'
            }}
            onClick={() => handleOpenModal(params.id, params.value, params.row.datetime)}
          >
            <img src={editIcon} style={{ width: '25px' }} alt='edit' />
          </Button>
        </div >
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
  }

  return (
    <>
      <DataGrid
        autoHeight
        rows={rows}
        rowHeight={35}
        columns={columns}
        sortModel={[{
          field: 'datetime',
          sort: 'desc',
        }]}
        disableColumnMenu={true}
        disableColumnSelector={true}
        disableSelectionOnClick
        components={{
          NoRowsOverlay: NoWeighingsOverlay,
          Toolbar: CustomToolbar
        }}
        pagination
        pageSize={25}
        className={!weighings.length && 'zero-state-grid'}
      />

      <EditModal
        open={modalOpen}
        setOpen={setModalOpen}
        id={editId}
        weight={editWeight}
        setEditWeight={setEditWeight}
        datetime={editDateTime}
        setEditDateTime={setEditDateTime}
        token={token}
        alert={alert}
        setAlert={setAlert}
        editWeighingFromState={editWeighingFromState}
        removeWeighingFromState={removeWeighingFromState}
      />
    </>
  )
}