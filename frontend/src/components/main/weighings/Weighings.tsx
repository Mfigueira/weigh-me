import { useEffect, useContext } from 'react';
import { useActions } from '../../../hooks/useActions';
import { AuthContext } from '../../../store/AuthContext';

import { Switch, Route, Redirect } from 'react-router-dom';
import WeighingForm from './scale/WeighingForm';
import WeighingsGrid from './grid/WeighingsGrid';
import WeighingsChart from './chart/WeighingsChart';

const Weighings: React.FC = () => {
  const { token } = useContext(AuthContext);
  const { setWeighings } = useActions();

  useEffect(() => {
    setWeighings(token);
  }, [token, setWeighings]);

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
