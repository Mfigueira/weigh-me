import './App.scss';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { AppSnackbar } from './components/main/custom/AppSnackbar';

export const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
    <AppSnackbar />
  </>
);
