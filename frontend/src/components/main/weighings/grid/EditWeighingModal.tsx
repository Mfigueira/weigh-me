import { useContext, useState } from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  FormControl,
  Input,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import { extractSecsFromTime, isWeightValid } from '../../../../util/helpers';
import { updateWeighing, deleteWeighing } from '../../../../util/http';
import { NotificationsContext } from '../../../../store/NotificationsContext';
import { AuthContext } from '../../../../store/AuthContext';
import { WeighingsContext } from '../../../../store/WeighingsContext';
import classes from './EditWeighingModal.module.scss';
import AppSpinner from '../../../UI/AppSpinner';

interface EditWeighingModalProps {
  id: number;
  weight: number;
  datetime: string;
  open: boolean;
  onClose: () => void;
}

const EditWeighingModal: React.FC<EditWeighingModalProps> = ({
  id,
  weight,
  datetime,
  open,
  onClose,
}) => {
  const { token } = useContext(AuthContext);
  const { onEditWeighing, onRemoveWeighing } = useContext(WeighingsContext);
  const { onSuccessAlert, onErrorAlert } = useContext(NotificationsContext);

  const [editWeight, setEditWeight] = useState('');
  const [editDateTime, setEditDateTime] = useState('');

  const [editingWeight, setEditingWeight] = useState(false);
  const [editingDateTime, setEditingDateTime] = useState(false);

  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isWeightValid(event.target.value)) {
      setEditWeight(event.target.value);
      if (!editingWeight) setEditingWeight(true);
    }
  };

  const handleDatetimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditDateTime(extractSecsFromTime(event.target.value));
    if (!editingDateTime) setEditingDateTime(true);
  };

  const handleUpdate = async () => {
    setUpdateLoading(true);
    try {
      const weighing = {
        id,
        weight: editingWeight ? Number(editWeight) : weight,
        datetime: editingDateTime ? editDateTime : datetime,
      };
      await updateWeighing(token!, weighing);
      onClose();
      onEditWeighing(weighing);
      onSuccessAlert('Weighing updated.');
    } catch (err) {
      onErrorAlert(err);
      setUpdateLoading(false);
    }
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      await deleteWeighing(token!, id);
      onClose();
      onRemoveWeighing(id);
      onSuccessAlert('Weighing deleted.');
    } catch (err) {
      onErrorAlert(err);
      setDeleteLoading(false);
    }
  };

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2>Edit Weighing</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={classes.group}>
              <FormControl>
                <Input
                  className={classes.weightpicker}
                  value={editingWeight ? editWeight : weight}
                  type="number"
                  inputProps={{ step: 0.01, min: 0, max: 999.99 }}
                  autoComplete="off"
                  placeholder="0.00"
                  onChange={handleWeightChange}
                  onKeyDown={(e) => e.key === 'e' && e.preventDefault()}
                  endAdornment={
                    <InputAdornment position="end">Kg</InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className={`${classes.group} ${classes.dategroup}`}>
              <TextField
                className={classes.datepicker}
                label="When?"
                type="datetime-local"
                autoComplete="off"
                value={editingDateTime ? editDateTime : datetime}
                InputLabelProps={{ shrink: true }}
                onChange={handleDatetimeChange}
              />
            </div>
            <div className={classes.cta}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDelete}
                disabled={deleteLoading}
              >
                Delete
                {deleteLoading && <AppSpinner />}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
                disabled={
                  !id || (!editWeight && !editDateTime) || updateLoading
                }
              >
                Update
                {updateLoading && <AppSpinner />}
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
