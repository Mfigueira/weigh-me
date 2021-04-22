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
import { getWeighings } from './util/requests';
import { getTokenFromStorage, removeTokenFromStorage } from './util/helpers';

function App() {
    const [weighings, setWeighings] = useState([]);
    const [token, setToken] = useState(getTokenFromStorage());

    useEffect(() => {
        console.log('useEffect hooked');
        
        if (token) {
            console.log('hooked with token');
            getWeighings(token).then(res => {
                setWeighings(res.data);
            }).catch(err => {
                // TODO: error message handler for all requests
                console.error(err);
                console.log(err.response.data);
                if (err.response.status === 401) {
                    removeTokenFromStorage();
                    setToken(null);
                }
            });
        } else {
            console.log('hooked without token');
        }
    }, [token]);

    const addWeighing = weighing =>
        setWeighings(currentWeighings =>
            [...currentWeighings, weighing]
        );

    return (
        <BrowserRouter>
            <Header token={token} setToken={setToken} />
            <Main
                token={token}
                setToken={setToken}
                addWeighing={addWeighing}
                weighings={weighings}
            />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
