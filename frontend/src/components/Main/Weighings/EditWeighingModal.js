import { useContext, useState } from 'react';
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
  TextField,
} from '@material-ui/core';
import { extractSecsFromTime, isWeightValid } from '../../../util/helpers';
import { updateWeighing, deleteWeighing } from '../../../util/http';
import { NotificationsContext } from '../../../store/NotificationsContext';
import { AuthContext } from '../../../store/AuthContext';
import { WeighingsContext } from '../../../store/WeighingsContext';
import classes from './EditWeighingModal.module.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

const EditWeighingModal = ({ id, weight, datetime, open, onClose }) => {
  const { token } = useContext(AuthContext);
  const { onEditWeighing, onRemoveWeighing } = useContext(WeighingsContext);
  const { onSuccessAlert, onErrorAlert } = useContext(NotificationsContext);

  const matClasses = useStyles();

  const [editWeight, setEditWeight] = useState('');
  const [editDateTime, setEditDateTime] = useState('');

  const [editingWeight, setEditingWeight] = useState(false);
  const [editingDateTime, setEditingDateTime] = useState(false);

  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleWeightChange = (e) => {
    if (isWeightValid(`${e.target.value}`)) {
      setEditWeight(e.target.value);
      !editingWeight && setEditingWeight(true);
    }
  };

  const handleDatetimeChange = (e) => {
    setEditDateTime(extractSecsFromTime(e.target.value));
    !editingDateTime && setEditingDateTime(true);
  };

  const handleUpdate = async () => {
    setUpdateLoading(true);
    try {
      const weighing = {
        id,
        weight: editingWeight ? `${editWeight}` : `${weight}`,
        datetime: editingDateTime ? editDateTime : datetime,
      };
      await updateWeighing(token, JSON.stringify(weighing));
      onClose();
      onEditWeighing({ ...weighing, weight: +weighing.weight });
      onSuccessAlert('Weighing updated.');
    } catch (err) {
      onErrorAlert(err);
    }
    setUpdateLoading(false);
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      await deleteWeighing(token, JSON.stringify({ id }));
      onClose();
      onRemoveWeighing(id);
      onSuccessAlert('Weighing deleted.');
    } catch (err) {
      onErrorAlert(err);
    }
    setDeleteLoading(false);
  };

  return (
    <Modal
      className={matClasses.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={matClasses.paper}>
          <h2>Edit Weighing</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ marginBottom: '1.2rem', textAlign: 'center' }}>
              <FormControl>
                <Input
                  id="addWeighingFormWeight"
                  value={editingWeight ? editWeight : weight}
                  type="number"
                  inputProps={{ step: 0.01, min: 0, max: 999.99 }}
                  autoComplete="off"
                  placeholder="0.00"
                  onChange={handleWeightChange}
                  onKeyDown={(e) => e.key === 'e' && e.preventDefault()}
                  endAdornment={
                    <InputAdornment position="end">
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
                id="addWeighingFormDatepicker"
                label="When?"
                type="datetime-local"
                autoComplete="off"
                value={editingDateTime ? editDateTime : datetime}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleDatetimeChange}
              />
            </div>
            <div className={classes.cta}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDelete}
                disable={deleteLoading}
              >
                {deleteLoading ? (
                  <CircularProgress className={classes.spinner} />
                ) : (
                  'Delete'
                )}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
                disabled={
                  !id || (!editWeight && !editDateTime) || updateLoading
                }
              >
                {updateLoading ? (
                  <CircularProgress className={classes.spinner} />
                ) : (
                  'Update'
                )}
              </Button>
              <Button variant="contained" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default EditWeighingModal;
