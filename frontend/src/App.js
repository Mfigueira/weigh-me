import './App.scss';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { AppSnackbar } from './components/Main/Custom/AppSnackbar';

export const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
    <AppSnackbar />
  </>
);
