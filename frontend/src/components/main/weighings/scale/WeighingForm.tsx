import { useState } from 'react';
import { useActions } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import {
  TextField,
  InputAdornment,
  Input,
  FormControl,
  Fab,
} from '@material-ui/core';
import AppSpinner from '../../../UI/AppSpinner';
import {
  formatDateTimeOrGetNow,
  extractSecsFromTime,
  isWeightValid,
  inputNumberKeyInvalid,
} from '../../../../util/helpers';

import add from '../../../../assets/img/add.svg';
import addDisabled from '../../../../assets/img/add-disabled.svg';
import classes from './WeighingForm.module.scss';

const WeighingForm: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [datetime, setDateTime] = useState(formatDateTimeOrGetNow());

  const loading = useTypedSelector((state) => state.weighings.loading);
  const { addWeighing } = useActions();

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    isWeightValid(String(event.target.value)) && setWeight(event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addWeighing({ weight: Number(weight), datetime });
    setWeight('');
    setDateTime(formatDateTimeOrGetNow());
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
