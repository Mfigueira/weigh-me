import './WeighingForm.scss';
import scale from '../../../assets/img/bg-scale.svg';
import add from '../../../assets/img/add.svg';
import addDisabled from '../../../assets/img/add-disabled.svg';
import { useContext, useState } from 'react';
import {
  TextField,
  InputAdornment,
  Input,
  FormControl,
  Fab,
  CircularProgress,
} from '@material-ui/core';
import {
  formatDateTimeOrGetNow,
  extractSecsFromTime,
  isWeightValid,
} from '../../../util/helpers';
import { createWeighing } from '../../../util/http';
import { NotificationsContext } from '../../../store/NotificationsContext';
import { AuthContext } from '../../../store/AuthContext';
import { WeighingsContext } from '../../../store/WeighingsContext';

const WeighingForm = () => {
  const { token } = useContext(AuthContext);
  const { onAddWeighing } = useContext(WeighingsContext);
  const { onSuccessAlert, onErrorAlert } = useContext(NotificationsContext);

  const [weight, setWeight] = useState('');
  const [datetime, setDateTime] = useState(formatDateTimeOrGetNow);
  const [ajaxLoading, setAjaxLoading] = useState(false);

  const handleWeightChange = (e) =>
    isWeightValid(`${e.target.value}`) && setWeight(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAjaxLoading(true);
    try {
      let weighing = { weight, datetime };
      const res = await createWeighing(token, JSON.stringify(weighing));
      weighing.id = res.data.id;
      onAddWeighing({ ...weighing, weight: +weighing.weight });
      setWeight('');
      setDateTime(formatDateTimeOrGetNow);
      onSuccessAlert('Weighing added!');
    } catch (err) {
      onErrorAlert(err);
    }
    setAjaxLoading(false);
  };

  const styles = {
    container: {
      boxShadow: '0px 7px 8px #888888',
      borderRadius: '60px',
      backgroundImage: `url(${scale})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      padding: '2rem',
      width: '300px',
      height: '300px',
      boxSizing: 'border-box',
    },
    form: {
      paddingTop: '7rem',
      position: 'relative',
    },
  };

  return (
    <>
      <h2>
        Let's{' '}
        <p>
          <b>Weigh Me!</b>
        </p>
      </h2>

      <div id="addWeighingForm" style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={{ marginBottom: '1.2rem' }}>
            <FormControl>
              <Input
                id="addWeighingFormWeight"
                value={weight}
                type="number"
                inputProps={{ step: 0.01, min: 0, max: 999.99 }}
                autoComplete="off"
                placeholder="0.00"
                onChange={handleWeightChange}
                onKeyDown={(e) => e.key === 'e' && e.preventDefault()}
                endAdornment={
                  <InputAdornment position="end">
                    <span
                      style={{
                        color: '#fff',
                        fontSize: '1rem',
                        marginTop: '2rem',
                      }}
                    >
                      Kg
                    </span>
                  </InputAdornment>
                }
                style={{ fontSize: '3rem' }}
              />
            </FormControl>
          </div>
          <div>
            <TextField
              id="addWeighingFormDatepicker"
              label="When?"
              type="datetime-local"
              autoComplete="off"
              value={datetime}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setDateTime(extractSecsFromTime(e.target.value))}
            />
          </div>
          <Fab
            id="addWeighingFormAddButton"
            aria-label="Add"
            type="submit"
            disabled={!weight || !datetime || ajaxLoading}
          >
            {ajaxLoading ? (
              <CircularProgress style={{ height: '25px', width: '25px' }} />
            ) : (
              <img
                src={!weight || !datetime ? addDisabled : add}
                alt="Add"
                style={
                  !weight || !datetime || ajaxLoading
                    ? { width: '100%', opacity: '0.5' }
                    : { width: '100%' }
                }
              />
            )}
          </Fab>
        </form>
      </div>
    </>
  );
};

export default WeighingForm;
