import { useState } from 'react';
import { getDateToday, getTimeNow } from '../../util/helpers';
import { addNewWeighing } from '../../util/requests';

export const WeighingForm = ({onNewWeighing}) => {
    const [weight, setWeight] = useState('');
    const [date, setDate] = useState(getDateToday());
    const [time, setTime] = useState(getTimeNow());

    const handleSubmit = e => {
        e.preventDefault();
        const weighing = { weight, date, time };
        addNewWeighing(JSON.stringify(weighing)).then(res => {
            // TODO: remove console.log
            console.log(res.data);
            onNewWeighing(weighing);
            setWeight('');
            setDate(getDateToday());
            setTime(getTimeNow());
        }).catch(err => {
            console.error(err);
            console.log(err.response.data);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input type="text" autoFocus autoComplete="off" placeholder="000.0"
                        value={weight} onChange={e => setWeight(e.target.value)} />
                    kg
                </label>
            </div>
            <div>
                <label>
                    Date
                    <input type="date" autoComplete="off" placeholder="yyyy-mm-dd"
                        value={date} onChange={e => setDate(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Time
                    <input type="time" autoComplete="off" placeholder="HH:MM"
                        value={time} onChange={e => setTime(e.target.value)} />
                </label>
            </div>
            <button type="submit" disabled={!weight}>Add</button>
        </form>
    )
}