import { useEffect, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WeighingForm from './WeighingForm';
import WeighingsGrid from './WeighingsGrid';
import WeighingsChart from './WeighingsChart';
import { NotificationsContext } from '../../../store/NotificationsContext';
import { AuthContext } from '../../../store/AuthContext';
import { useActions } from '../../../hooks/useActions';

const Weighings: React.FC = () => {
  const { setWeighings } = useActions();

  const { onErrorAlert } = useContext(NotificationsContext);
  const { token, onLogout } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        setWeighings(token!);
      } catch (err) {
        onLogout();
        onErrorAlert('Could not get weighings data');
      }
    })();
  }, [token, onLogout, onErrorAlert, setWeighings]);

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
