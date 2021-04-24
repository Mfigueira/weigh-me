import { useState } from 'react';
import scale from '../../assets/img/bg-scale.svg';
import add from '../../assets/img/add.svg';
import addDisabled from '../../assets/img/add-disabled.svg';
import '../../assets/styles/WeighingForm.css';
import { useHistory } from 'react-router';
import { getDateTimeToday, getDateFromDT, getTimeFromDT } from '../../util/helpers';
import { createWeighing } from '../../util/requests';
import { TextField, InputAdornment, Input, FormControl, Fab } from '@material-ui/core';

export const WeighingForm = ({ token, addWeighing, setTabValue }) => {
  const [weight, setWeight] = useState('');
  const [dateTime, setDateTime] = useState(getDateTimeToday);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const date = getDateFromDT(dateTime);
    const time = getTimeFromDT(dateTime);
    const weighing = { weight, date, time };
    createWeighing(token, JSON.stringify(weighing)).then(res => {
      // TODO: remove console.log
      console.log(res.data);
      addWeighing(weighing);
      setWeight('');
      setDateTime(getDateTimeToday);
      history.push('/weighings');
      setTabValue(1);
    }).catch(err => {
      console.error(err);
      console.log(err.response.data);
    });
  }

  const styles = {
    section: {
      boxShadow: '0px 7px 8px #888888',
      borderRadius: '60px',
      backgroundImage: `url(${scale})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      padding: '2rem',
      width: '300px',
      height: '300px',
      boxSizing: 'border-box'
    },
    form: {
      paddingTop: '7rem',
      position: 'relative'
    }
  }

  return (
    <section id='addWeighingForm' style={styles.section}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={{ marginBottom: '1.2rem' }}>
          <FormControl>
            <Input
              id='addWeighingFormWeight'
              value={weight}
              autoFocus
              autoComplete='off'
              onChange={e => setWeight(e.target.value)}
              endAdornment={
                <InputAdornment position='end'>
                  <span style={{ color: '#fff', fontSize: '1rem', marginTop: '2rem' }}>Kg</span>
                </InputAdornment>
              }
              style={{ fontSize: '3rem' }}
            />
          </FormControl>
        </div>
        <div>
          <TextField
            id='addWeighingFormDatepicker'
            label='When?'
            type='datetime-local'
            autoComplete='off'
            value={dateTime}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => setDateTime(e.target.value)}
          />
        </div>
        <Fab id='addWeighingFormAddButton' aria-label='Add' type='submit' disabled={(!weight || !dateTime)}>
          <img src={(!weight || !dateTime) ? addDisabled : add} alt='Add'
            style={(!weight || !dateTime) ? ({ width: '100%', opacity: '0.5' }) : ({ width: '100%' })}
          />
        </Fab>
      </form>
    </section>
  )
}