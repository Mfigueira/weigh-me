// Core
// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

// Util
import { getWeighings, getProfile } from './util/requests';
import { getTabByRoute, getTokenFromStorage, removeTokenFromStorage } from './util/helpers';

function App() {
  const location = useLocation();
  const [token, setToken] = useState(getTokenFromStorage());
  const [profile, setProfile] = useState(null);
  const [weighings, setWeighings] = useState([]);
  const [tabValue, setTabValue] = useState(() => getTabByRoute(location.pathname));

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
          // TODO: error message handler for all requests
          console.error(err);
          removeTokenFromStorage();
          setToken(null);
          setProfile(null);
          setTabValue(0);
          setWeighings([]);
        }
      })();
    }
  }, [token]);

  const addWeighing = weighing =>
    setWeighings(currentWeighings =>
      [...currentWeighings, weighing]
    );

  return (
    <>
      <Header
        token={token}
        setToken={setToken}
        profile={profile}
        setProfile={setProfile}
        tabValue={tabValue}
        setTabValue={setTabValue}
      />
      <Main
        token={token}
        setToken={setToken}
        weighings={weighings}
        addWeighing={addWeighing}
        tabValue={tabValue}
        setTabValue={setTabValue}
      />
      <Footer />
    </>
  );
}

export default App;
