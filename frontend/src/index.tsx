import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { NotificationsContextProvider } from './store/NotificationsContext';
import { AuthContextProvider } from './store/AuthContext';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <NotificationsContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </NotificationsContextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
