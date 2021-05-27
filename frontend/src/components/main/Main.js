import '../../assets/styles/Main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginForm } from './auth/LoginForm';
import { RegisterForm } from './auth/RegisterForm';
import { WeighingForm } from './WeighingForm';
import { WeighingsGrid } from './WeighingsGrid';
import { WeighingsChart } from './WeighingsChart';

export const Main = ({
  token,
  setToken,
  alert,
  setAlert,
  weighings,
  addWeighingToState,
  editWeighingFromState,
  removeWeighingFromState,
}) => {
  const setPaddingTop = () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    return `${Math.max(
      40 + (header?.clientHeight ?? 0) + (nav?.clientHeight ?? 0),
      104
    )}px`;
  };

  return (
    <main style={{ paddingTop: setPaddingTop() }}>
      {token ? (
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <WeighingForm
                {...props}
                token={token}
                alert={alert}
                setAlert={setAlert}
                addWeighingToState={addWeighingToState}
              />
            )}
          />
          <Route
            path="/grid"
            render={props => (
              <WeighingsGrid
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
          <Route
            path="/chart"
            render={props => (
              <WeighingsChart {...props} weighings={weighings} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <LoginForm
                {...props}
                setToken={setToken}
                alert={alert}
                setAlert={setAlert}
              />
            )}
          />
          <Route
            path="/register"
            render={props => (
              <RegisterForm
                {...props}
                setToken={setToken}
                alert={alert}
                setAlert={setAlert}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      )}
    </main>
  );
};
