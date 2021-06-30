import './App.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { AppNotification } from './components/Main/Custom/AppNotification';

export const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
    <AppNotification />
  </>
);
