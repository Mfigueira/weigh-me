import classes from './LoginForm.module.scss';
import user from '../../../assets/img/user.svg';
import key from '../../../assets/img/key.svg';

import { useContext, useState } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import AuthForm from '../../UI/AuthForm';
import AppSpinner from '../../UI/AppSpinner';
import { AuthContext } from '../../../store/context/AuthContext';
import { NotificationsContext } from '../../../store/context/NotificationsContext';
import { isPasswordValid, isUsernameValid } from '../../../util/helpers';
import { loginUser } from '../../../util/http';

const LoginForm: React.FC = () => {
  const { onLogin } = useContext(AuthContext);
  const { onSuccessAlert, onErrorAlert } = useContext(NotificationsContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    isUsernameValid(event.target.value) && setUsername(event.target.value);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    isPasswordValid(event.target.value) && setPassword(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const user = { username, password };
      const res = await loginUser(user);
      onLogin(res.data.access_token);
      onSuccessAlert(`Hi, ${username}!`);
    } catch (err) {
      onErrorAlert(err);
      setLoading(false);
    }
  };

  return (
    <section>
      <h2>
        Sign <b>Me</b> in
      </h2>

      <AuthForm onSubmit={handleSubmit}>
        <div className={classes.mb1}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <img src={user} className={classes.icon} alt="user" />
            </Grid>
            <Grid item>
              <TextField
                label="Username"
                autoComplete="off"
                value={username}
                onChange={handleUsernameChange}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.mb2}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <img src={key} className={classes.icon} alt="password" />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                label="Password"
                autoComplete="off"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!username || !password || loading}
        >
          Sign In
          {loading && <AppSpinner />}
        </Button>
      </AuthForm>
    </section>
  );
};

export default LoginForm;
