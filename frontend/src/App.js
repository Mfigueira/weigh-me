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

function App() {
    const [weighings, setWeighings] = useState([]);

    useEffect(() => {
        getWeighings().then(res => {
            setWeighings(res.data);
        }).catch(err => {
            console.error(err);
            // TODO: error message handler for all requests
            console.log(err.response.data);
        });
    }, []);

    const setNewWeighing = weighing =>
        setWeighings(currentWeighings =>
            [...currentWeighings, weighing]
        );

    return (
        <BrowserRouter>
            <Header />
            <Main
                setNewWeighing={setNewWeighing}
                weighings={weighings}
            />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
