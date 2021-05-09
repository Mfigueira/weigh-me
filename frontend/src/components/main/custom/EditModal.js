import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, FormControl, Input, InputAdornment, TextField } from '@material-ui/core';
import { extractSecsFromTime, handleErrorAlert, handleSuccessAlert, isWeightValid } from '../../../util/helpers';
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

export const EditModal = (
  {
    open, setOpen, token, alert, setAlert,
    id, weight, setEditWeight, datetime, setEditDateTime,
    editWeighingFromState, removeWeighingFromState
  }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleWeightChange = e => {
    let value = e.target.value;
    if (isWeightValid(value.toString())) setEditWeight(value);
  }

  const handleUpdate = () => {
    let weighing = { id, weight: weight.toString(), datetime };
    updateWeighing(token, JSON.stringify(weighing)).then(res => {
      editWeighingFromState({ ...weighing, weight: Number(weighing.weight) });
      handleClose();
      handleSuccessAlert('Weighing updated.', alert, setAlert);
    }).catch(err => handleErrorAlert(err, alert, setAlert));
  }

  const handleDelete = () => {
    let weighing = { id };
    deleteWeighing(token, JSON.stringify(weighing)).then(res => {
      removeWeighingFromState(weighing.id);
      handleClose();
      handleSuccessAlert('Weighing deleted.', alert, setAlert);
    }).catch(err => handleErrorAlert(err, alert, setAlert));
  }

  return (
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
                  value={weight}
                  type='number'
                  inputProps={{ step: 0.01, min: 0, max: 999.99 }}
                  autoComplete='off'
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
                value={datetime}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => setEditDateTime(extractSecsFromTime(e.target.value))}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" color="secondary" onClick={handleDelete}>
                <b>Delete</b>
              </Button>
              <Button variant="contained" color="primary" onClick={handleUpdate} disabled={(!id || !weight || !datetime)}>
                <b>Update</b>
              </Button>
              <Button variant="contained" onClick={handleClose}>
                <b>Cancel</b>
              </Button>
            </div>
          </form>
        </div>
      </Fade>
    </Modal>
  );
}
