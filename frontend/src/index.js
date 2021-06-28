import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './store/AppContextProvider';
import { AuthContextProvider } from './store/AuthContextProvider';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
