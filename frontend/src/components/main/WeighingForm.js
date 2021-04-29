import '../../assets/styles/WeighingForm.css';
import scale from '../../assets/img/bg-scale.svg';
import add from '../../assets/img/add.svg';
import addDisabled from '../../assets/img/add-disabled.svg';
import { useState } from 'react';
import { getDateTimeToday, extractSecsFromTime } from '../../util/helpers';
import { createWeighing } from '../../util/requests';
import { TextField, InputAdornment, Input, FormControl, Fab } from '@material-ui/core';

export const WeighingForm = ({ token, addWeighing }) => {
  const [weight, setWeight] = useState('');
  const [datetime, setDateTime] = useState(getDateTimeToday);

  const handleSubmit = e => {
    e.preventDefault();
    let weighing = { weight, datetime };
    createWeighing(token, JSON.stringify(weighing)).then(res => {
      weighing.id = res.data.id;
      addWeighing(weighing);
      setWeight('');
      setDateTime(getDateTimeToday);
    }).catch(err => {
      console.error(err);
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
              type='number'
              step='0.01'
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
            value={datetime}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => setDateTime(extractSecsFromTime(e.target.value))}
          />
        </div>
        <Fab id='addWeighingFormAddButton' aria-label='Add' type='submit' disabled={(!weight || !datetime)}>
          <img src={(!weight || !datetime) ? addDisabled : add} alt='Add'
            style={(!weight || !datetime) ? ({ width: '100%', opacity: '0.5' }) : ({ width: '100%' })}
          />
        </Fab>
      </form>
    </section>
  )
}