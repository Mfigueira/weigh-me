import '../../assets/styles/Main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginForm } from './auth/LoginForm';
import { RegisterForm } from './auth/RegisterForm';
import { WeighingForm } from './WeighingForm';
import { Weighings } from './Weighings';

export const Main = ({ token, setToken, setAlert, weighings, addWeighing, tabValue, setTabValue }) => {
  return (
    <main className={tabValue === 1 ? 'weighings' : ''}>
      {token ?
        <Switch>
          <Route path='/' exact
            render={props => (
              <WeighingForm
                {...props}
                token={token}
                setAlert={setAlert}
                addWeighing={addWeighing}
                setTabValue={setTabValue}
              />
            )}
          />
          <Route path='/weighings'
            render={props => (
              <Weighings
                {...props}
                token={token}
                weighings={weighings}
              />
            )}
          />
          <Redirect to='/' />
        </Switch>
        :
        <Switch>
          <Route path='/' exact
            render={props => (
              <LoginForm
                {...props}
                setToken={setToken}
                setAlert={setAlert}
              />
            )}
          />
          <Route path='/register'
            render={props => (
              <RegisterForm
                {...props}
                setToken={setToken}
                setAlert={setAlert}
              />
            )}
          />
          <Redirect to='/' />
        </Switch>
      }
    </main>
  );
}