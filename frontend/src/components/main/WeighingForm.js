import { useState } from 'react';
import { useHistory } from 'react-router';
import { getDateTimeToday, getDateFromDT, getTimeFromDT } from '../../util/helpers';
import { createWeighing } from '../../util/requests';
import { TextField, InputAdornment, Input, InputLabel, FormControl } from '@material-ui/core';

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

  return (
    <section>
      <h2>Add Weighing</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <FormControl>
            <InputLabel htmlFor="weightInput">Weight</InputLabel>
            <Input
              id="weightInput"
              value={weight}
              autoFocus
              autoComplete='off'
              onChange={e => setWeight(e.target.value)}
              endAdornment={
                <InputAdornment position="end">Kg</InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <TextField
            label="When?"
            type="datetime-local"
            autoComplete='off'
            value={dateTime}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => setDateTime(e.target.value)}
          />
        </div>
        <button type="submit" disabled={!weight}>Add</button>
      </form>
    </section>
  )
}