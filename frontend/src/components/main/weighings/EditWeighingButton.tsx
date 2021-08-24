import { useState } from 'react';
import { Button } from '@material-ui/core';
import EditWeighingModal from './EditWeighingModal';
import classes from './EditWeighingButton.module.scss';
import editIcon from '../../../assets/img/edit.svg';

interface EditWeighingButtonProps {
  id: number;
  weight: number;
  datetime: string;
}

const EditWeighingButton: React.FC<EditWeighingButtonProps> = ({
  id,
  weight,
  datetime,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={`${classes.btn} ${classes.custom}`}
        onClick={handleOpen}
      >
        <img src={editIcon} alt="edit" />
      </Button>

      {open && (
        <EditWeighingModal
          {...{ id, weight, datetime, open, onClose: handleClose }}
        />
      )}
    </>
  );
};

export default EditWeighingButton;
