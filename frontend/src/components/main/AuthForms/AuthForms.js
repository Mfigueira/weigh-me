import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const AuthForms = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <LoginForm />
      </Route>
      <Route path="/register">
        <RegisterForm />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
