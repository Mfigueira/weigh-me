import add from '../../../../assets/img/add.svg';
import addDisabled from '../../../../assets/img/add-disabled.svg';

import { useContext, useState } from 'react';
import {
  TextField,
  InputAdornment,
  Input,
  FormControl,
  Fab,
} from '@material-ui/core';
import AppSpinner from '../../../UI/AppSpinner';
import { NotificationsContext } from '../../../../store/NotificationsContext';
import { AuthContext } from '../../../../store/AuthContext';
import { WeighingsContext } from '../../../../store/WeighingsContext';
import {
  formatDateTimeOrGetNow,
  extractSecsFromTime,
  isWeightValid,
  inputNumberKeyInvalid,
} from '../../../../util/helpers';
import { createWeighing } from '../../../../util/http';
import { Weighing } from '../../../../models';
import classes from './WeighingForm.module.scss';

const WeighingForm: React.FC = () => {
  const { token } = useContext(AuthContext);
  const { onAddWeighing } = useContext(WeighingsContext);
  const { onSuccessAlert, onErrorAlert } = useContext(NotificationsContext);

  const [weight, setWeight] = useState('');
  const [datetime, setDateTime] = useState(formatDateTimeOrGetNow());
  const [loading, setLoading] = useState(false);

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    isWeightValid(String(event.target.value)) && setWeight(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      let weighing: Weighing = { weight: Number(weight), datetime };
      const res = await createWeighing(token!, weighing);
      weighing.id = res.data.id;
      onAddWeighing(weighing);
      setWeight('');
      setDateTime(formatDateTimeOrGetNow());
      onSuccessAlert('Weighing added!');
    } catch (err) {
      onErrorAlert(err);
    }
    setLoading(false);
  };

  return (
    <>
      <h2>
        Let's <br /> <b>Weigh Me!</b>
      </h2>

      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <FormControl className={classes.weightpicker}>
            <Input
              value={weight}
              type="number"
              inputProps={{ step: 0.01, min: 0, max: 999.99 }}
              autoComplete="off"
              placeholder="0.00"
              onChange={handleWeightChange}
              onKeyDown={(e) =>
                inputNumberKeyInvalid(e.key) && e.preventDefault()
              }
              endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            />
          </FormControl>

          <TextField
            className={classes.datepicker}
            label="When?"
            type="datetime-local"
            autoComplete="off"
            value={datetime}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setDateTime(extractSecsFromTime(e.target.value))}
          />

          <Fab
            className={classes.btn}
            aria-label="Add"
            type="submit"
            disabled={!weight || !datetime || loading}
          >
            {loading && <AppSpinner />}
            <img
              src={!weight || !datetime ? addDisabled : add}
              alt="Add"
              style={!weight || !datetime || loading ? { opacity: '0.5' } : {}}
            />
          </Fab>
        </form>
      </div>
    </>
  );
};

export default WeighingForm;
