import '../../assets/styles/Main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginForm } from './auth/LoginForm';
import { RegisterForm } from './auth/RegisterForm';
import { WeighingForm } from './WeighingForm';
import { Weighings } from './Weighings';

export const Main = ({ token, setToken, weighings, addWeighing, setTabValue }) => {
  return (
    <main>
      {token ?
        <Switch>
          <Route path='/' exact
            render={props => (
              <WeighingForm {...props} token={token} addWeighing={addWeighing} setTabValue={setTabValue} />
            )}
          />
          <Route path='/weighings'
            render={props => (
              <Weighings {...props} token={token} weighings={weighings} />
            )}
          />
          <Redirect to='/' />
        </Switch>
        :
        <Switch>
          <Route path='/' exact
            render={props => (
              <LoginForm {...props} token={token} setToken={setToken} />
            )}
          />
          <Route path='/register'
            render={props => (
              <RegisterForm {...props} token={token} setToken={setToken} />
            )}
          />
          <Redirect to='/' />
        </Switch>
      }
    </main>
  );
}