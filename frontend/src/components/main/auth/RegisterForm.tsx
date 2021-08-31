import classes from './RegisterForm.module.scss';
import user from '../../../assets/img/user.svg';
import key from '../../../assets/img/key.svg';
import doubleKey from '../../../assets/img/double-key.svg';

import { AuthType, useAuthentication } from '../../../hooks/useAuthentication';
import { TextField, Button, Grid } from '@material-ui/core';
import AuthForm from '../../UI/AuthForm';
import AppSpinner from '../../UI/AppSpinner';

const RegisterForm: React.FC = () => {
  const {
    username,
    password,
    confirmation,
    loading,
    handleUsernameChange,
    handlePasswordChange,
    handleConfirmationChange,
    handleSubmit,
  } = useAuthentication(AuthType.SIGN_UP);

  return (
    <section>
      <h2>
        Register <b>Me</b>
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
                helperText="* Max 12 chars. No spaces."
                autoComplete="off"
                required
                value={username}
                onChange={handleUsernameChange}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.mb1}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <img src={key} className={classes.icon} alt="password" />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                label="Password"
                helperText="* Max 20 chars. No spaces."
                autoComplete="off"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.mb2}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <img src={doubleKey} className={classes.icon} alt="confirm" />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                label="Confirm Password"
                helperText="* Max 20 chars. No spaces."
                autoComplete="off"
                required
                value={confirmation}
                onChange={handleConfirmationChange}
              />
            </Grid>
          </Grid>
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!username || !password || !confirmation || loading}
        >
          Sign Up
          {loading && <AppSpinner />}
        </Button>
      </AuthForm>
    </section>
  );
};

export default RegisterForm;
