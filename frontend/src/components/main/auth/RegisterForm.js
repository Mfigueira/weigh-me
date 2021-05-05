import '../../../assets/styles/AuthForms.css';
import { useState } from 'react';
import { handleErrorAlert, handleSuccessAlert, isPasswordValid, isUsernameValid, saveTokenInStorage } from '../../../util/helpers';
import { registerUser } from '../../../util/requests';
import { TextField, Button, Grid } from '@material-ui/core';
import user from '../../../assets/img/user.svg';
import key from '../../../assets/img/key.svg';
import doubleKey from '../../../assets/img/double-key.svg';

export const RegisterForm = ({ setToken, alert, setAlert }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const styles = {
    icon: {
      width: '1.5rem',
      margin: '0 0.5rem 1.8rem 0'
    }
  }

  const handleUsernameChange = e => {
    let value = e.target.value;
    if (isUsernameValid(value))
      setUsername(value);
  }

  const handlePasswordChange = e => {
    let value = e.target.value;
    if (isPasswordValid(value))
      setPassword(value);
  }

  const handleConfirmationChange = e => {
    let value = e.target.value;
    if (isPasswordValid(value))
      setConfirmation(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = { username, password, confirmation };
    registerUser(JSON.stringify(user)).then(res => {
      saveTokenInStorage(res.data.access_token);
      setToken(res.data.access_token);
      handleSuccessAlert('Signed up!', alert, setAlert);
    }).catch(err => handleErrorAlert(err, alert, setAlert));
  }

  return (
    <section className='auth-form-section'>
      <h2>Register <b>Me</b></h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <img
                src={user}
                style={styles.icon}
                alt='user'
              />
            </Grid>
            <Grid item>
              <TextField
                label="Username"
                helperText="* Max 12 chars. No spaces."
                autoFocus
                autoComplete="off"
                required
                value={username}
                onChange={handleUsernameChange} />
            </Grid>
          </Grid>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <img
                src={key}
                style={styles.icon}
                alt='password'
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                label="Password"
                helperText="* Max 20 chars. No spaces."
                autoComplete="off"
                required
                value={password}
                onChange={handlePasswordChange} />
            </Grid>
          </Grid>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <img
                src={doubleKey}
                style={styles.icon}
                alt='confirm'
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                label="Confirm Password"
                helperText="* Max 20 chars. No spaces."
                autoComplete="off"
                required
                value={confirmation}
                onChange={handleConfirmationChange} />
            </Grid>
          </Grid>
        </div>
        <Button
          variant="contained" color="primary" type="submit"
          disabled={(!username || !password || !confirmation)}
        >
          Sign Up
        </Button>
      </form>
    </section>
  )
}