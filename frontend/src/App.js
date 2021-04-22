// Core
// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

// Util
import { getWeighings, getProfile } from './util/requests';
import { getTokenFromStorage, removeTokenFromStorage } from './util/helpers';

function App() {
  const [token, setToken] = useState(getTokenFromStorage());
  const [profile, setProfile] = useState(null);
  const [weighings, setWeighings] = useState([]);

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const pr1 = getProfile(token)
          const pr2 = getWeighings(token)
          const [profileResponse, weighingsResponse] = await Promise.all([pr1, pr2])

          setProfile(profileResponse.data);
          setWeighings(weighingsResponse.data);
        } catch (error) {
          // TODO: error message handler for all requests
          console.error(error);
          console.log(error.response.data);
          if (error.response.status === 401) {
            removeTokenFromStorage();
            setToken(null);
          }
        }
      })();
    }
  }, [token]);

  const addWeighing = weighing =>
    setWeighings(currentWeighings =>
      [...currentWeighings, weighing]
    );

  return (
    <BrowserRouter>
      <Header
        token={token}
        setToken={setToken}
        profile={profile}
        setProfile={setProfile} />
      <Main
        token={token}
        setToken={setToken}
        weighings={weighings}
        addWeighing={addWeighing}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
