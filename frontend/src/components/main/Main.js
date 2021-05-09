import '../../assets/styles/Main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginForm } from './auth/LoginForm';
import { RegisterForm } from './auth/RegisterForm';
import { WeighingForm } from './WeighingForm';
import { Weighings } from './Weighings';

export const Main = (
  {
    token, setToken, alert, setAlert,
    weighings, addWeighingToState, editWeighingFromState, removeWeighingFromState,
    tabValue, setTabValue
  }) => {
  return (
    <main className={tabValue === 1 ? 'weighings' : ''}>
      {token ?
        <Switch>
          <Route path='/' exact
            render={props => (
              <WeighingForm
                {...props}
                token={token}
                alert={alert}
                setAlert={setAlert}
                addWeighingToState={addWeighingToState}
                setTabValue={setTabValue}
              />
            )}
          />
          <Route path='/weighings'
            render={props => (
              <Weighings
                {...props}
                token={token}
                alert={alert}
                setAlert={setAlert}
                weighings={weighings}
                editWeighingFromState={editWeighingFromState}
                removeWeighingFromState={removeWeighingFromState}
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
                alert={alert}
                setAlert={setAlert}
              />
            )}
          />
          <Route path='/register'
            render={props => (
              <RegisterForm
                {...props}
                setToken={setToken}
                alert={alert}
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