import editIcon from '../../../assets/img/edit.svg';
import { useState } from 'react';
import {
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Button,
  CircularProgress,
  FormControl,
  Input,
  InputAdornment,
  TextField
} from '@material-ui/core';
import {
  extractSecsFromTime,
  handleErrorAlert,
  handleSuccessAlert,
  isWeightValid
} from '../../../util/helpers';
import { updateWeighing, deleteWeighing } from '../../../util/requests';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #444',
    borderRadius: '6px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundImage: 'linear-gradient(#a4dad2, #bce08a)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export const EditWeighing = (
  {
    token, alert, setAlert,
    id, weight, datetime,
    editWeighingFromState, removeWeighingFromState
  }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [editWeight, setEditWeight] = useState('');
  const [editingWeight, setEditingWeight] = useState(false);
  const [editDateTime, setEditDateTime] = useState('');
  const [editingDateTime, setEditingDateTime] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleWeightChange = e => {
    let value = e.target.value;
    if (isWeightValid(value.toString())) {
      setEditWeight(value);
      if (!editingWeight) setEditingWeight(true);
    }
  }

  const handleDatetimeChange = e => {
    setEditDateTime(extractSecsFromTime(e.target.value));
    if (!editingDateTime) setEditingDateTime(true);
  }

  const handleUpdate = () => {
    setUpdateLoading(true);
    let weighing = {
      id,
      weight: editingWeight ? editWeight.toString() : weight.toString(),
      datetime: editingDateTime ? editDateTime : datetime
    };
    updateWeighing(token, JSON.stringify(weighing))
      .then(res => {
        handleClose();
        editWeighingFromState({ ...weighing, weight: Number(weighing.weight) });
        handleSuccessAlert('Weighing updated.', alert, setAlert);
      })
      .catch(err => handleErrorAlert(err, alert, setAlert))
      .finally(setUpdateLoading(false));
  }

  const handleDelete = () => {
    setDeleteLoading(true);
    let weighing = { id };
    deleteWeighing(token, JSON.stringify(weighing))
      .then(res => {
        handleClose();
        removeWeighingFromState(weighing.id);
        handleSuccessAlert('Weighing deleted.', alert, setAlert);
      })
      .catch(err => handleErrorAlert(err, alert, setAlert))
      .finally(setDeleteLoading(false));
  }

  return (
    <>
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
        onClick={handleOpen}
      >
        <img src={editIcon} style={{ width: '25px' }} alt='edit' />
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>Edit Weighing</h2>
            <form onSubmit={e => e.preventDefault()}>
              <div style={{ marginBottom: '1.2rem', textAlign: 'center' }}>
                <FormControl>
                  <Input
                    id='addWeighingFormWeight'
                    value={editingWeight ? editWeight : weight}
                    type='number'
                    inputProps={{ step: 0.01, min: 0, max: 999.99 }}
                    autoComplete='off'
                    placeholder='0.00'
                    onChange={handleWeightChange}
                    onKeyDown={e => e.key === 'e' && e.preventDefault()}
                    endAdornment={
                      <InputAdornment position='end'>
                        <span style={{ fontSize: '1rem', marginTop: '2rem' }}>
                          Kg
                      </span>
                      </InputAdornment>
                    }
                    style={{ fontSize: '3rem' }}
                  />
                </FormControl>
              </div>
              <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <TextField
                  id='addWeighingFormDatepicker'
                  label='When?'
                  type='datetime-local'
                  autoComplete='off'
                  value={editingDateTime ? editDateTime : datetime}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={handleDatetimeChange}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  variant="contained" color="secondary" onClick={handleDelete}
                  disable={deleteLoading}
                >
                  {deleteLoading ?
                    <CircularProgress style={{ height: '25px', width: '25px' }} />
                    :
                    'Delete'}
                </Button>
                <Button
                  variant="contained" color="primary" onClick={handleUpdate}
                  disabled={(!id || (!editWeight && !editDateTime) || updateLoading)}
                >
                  {updateLoading ?
                    <CircularProgress style={{ height: '25px', width: '25px' }} />
                    :
                    'Update'}
                </Button>
                <Button variant="contained" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
