// Core
import './App.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { AppSnackbar } from './components/main/custom/AppSnackbar';

// Util
import { getWeighings, getProfile } from './util/requests';
import {
  getTabByRoute,
  getTokenFromStorage,
  handleErrorAlert,
  removeTokenFromStorage
} from './util/helpers';

function App() {
  const location = useLocation();
  const [token, setToken] = useState(getTokenFromStorage());
  const [profile, setProfile] = useState(null);
  const [weighings, setWeighings] = useState([]);
  const [tabValue, setTabValue] = useState(() => getTabByRoute(location.pathname));
  const [alert, setAlert] = useState({
    open: false,
    message: 'success',
    severity: 'success'
  });

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const pr1 = getProfile(token);
          const pr2 = getWeighings(token);
          const [profileResponse, weighingsResponse] = await Promise.all([pr1, pr2]);

          setProfile(profileResponse.data);
          setWeighings(weighingsResponse.data);
        } catch (err) {
          removeTokenFromStorage();
          setToken(null);
          setProfile(null);
          setTabValue(0);
          setWeighings([]);
          handleErrorAlert(err, { message: '', severity: 'error' }, setAlert);
        }
      })();
    }
  }, [token]);

  const addWeighingToState = weighing =>
    setWeighings(currentWeighings =>
      [...currentWeighings, weighing].sort((a, b) =>
        new Date(b.datetime) - new Date(a.datetime)
      ));

  const editWeighingFromState = weighing =>
    setWeighings(weighings.map(currentWeighing =>
      currentWeighing.id === weighing.id ? weighing : currentWeighing
    ));

  const removeWeighingFromState = id =>
    setWeighings(weighings.filter(currentWeighing =>
      currentWeighing.id !== id
    ));

  return (
    <>
      <Header
        token={token}
        setToken={setToken}
        alert={alert}
        setAlert={setAlert}
        profile={profile}
        setProfile={setProfile}
        tabValue={tabValue}
        setTabValue={setTabValue}
      />
      <Main
        token={token}
        setToken={setToken}
        alert={alert}
        setAlert={setAlert}
        weighings={weighings}
        addWeighingToState={addWeighingToState}
        editWeighingFromState={editWeighingFromState}
        removeWeighingFromState={removeWeighingFromState}
        tabValue={tabValue}
        setTabValue={setTabValue}
      />
      <Footer />
      <AppSnackbar
        open={alert.open}
        setAlert={setAlert}
        message={alert.message}
        severity={alert.severity}
      />
    </>
  );
}

export default App;
