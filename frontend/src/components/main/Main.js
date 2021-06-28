import classes from './Main.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginForm } from './auth/LoginForm';
import { RegisterForm } from './auth/RegisterForm';
import { WeighingForm } from './WeighingForm';
import { WeighingsGrid } from './WeighingsGrid';
import { WeighingsChart } from './WeighingsChart';
import { useContext } from 'react';
import AppContext from '../../store/app-context';

export const Main = () => {
  const ctx = useContext(AppContext);

  const setPaddingTop = () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    return `${Math.max(
      40 + (header?.clientHeight ?? 0) + (nav?.clientHeight ?? 0),
      104
    )}px`;
  };

  return (
    <main className={classes.main} style={{ paddingTop: setPaddingTop() }}>
      {ctx.token ? (
        <Switch>
          <Route path="/" exact>
            <WeighingForm />
          </Route>
          <Route path="/grid">
            <WeighingsGrid />
          </Route>
          <Route path="/chart">
            <WeighingsChart />
          </Route>
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
    </main>
  );
};
