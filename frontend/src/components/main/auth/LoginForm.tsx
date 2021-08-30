import classes from './LoginForm.module.scss';
import user from '../../../assets/img/user.svg';
import key from '../../../assets/img/key.svg';

import { AuthType, useAuthentication } from '../../../hooks/useAuthentication';
import { TextField, Grid, Button } from '@material-ui/core';
import AuthForm from '../../UI/AuthForm';
import AppSpinner from '../../UI/AppSpinner';

const LoginForm: React.FC = () => {
  const {
    username,
    password,
    loading,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } = useAuthentication(AuthType.SIGN_IN);

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
