import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NotificationsContextProvider } from './store/notificationsContext';
import { AuthContextProvider } from './store/authContext';
import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
    <NotificationsContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </NotificationsContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
