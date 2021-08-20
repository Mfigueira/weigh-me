import { useEffect, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WeighingForm from './WeighingForm';
import WeighingsGrid from './WeighingsGrid';
import WeighingsChart from './WeighingsChart';
import { getWeighings } from '../../../util/http';
import { NotificationsContext } from '../../../store/NotificationsContext';
import { AuthContext } from '../../../store/AuthContext';
import { WeighingsContext } from '../../../store/WeighingsContext';

const Weighings = () => {
  const { onErrorAlert } = useContext(NotificationsContext);
  const { token, onLogout } = useContext(AuthContext);
  const { setWeighings } = useContext(WeighingsContext);

  useEffect(() => {
    (async () => {
      try {
        const weighingsRes = await getWeighings(token);
        setWeighings(weighingsRes.data);
      } catch (err) {
        setWeighings([]);
        onLogout();
        onErrorAlert('Could not get weighings data');
      }
    })();
  }, [token, setWeighings, onLogout, onErrorAlert]);

  return (
    <Switch>
      <Route path="/" exact>
        <WeighingForm />
      </Route>
      <Route path="/grid">
        <WeighingsGrid />
      </Route>
      <Route path="/chart">
        <WeighingsChart />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Weighings;
