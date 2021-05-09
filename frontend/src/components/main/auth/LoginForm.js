import '../../../assets/styles/AuthForms.css';
import user from '../../../assets/img/user.svg';
import key from '../../../assets/img/key.svg';
import { useState } from 'react';
import { handleErrorAlert, handleSuccessAlert, isPasswordValid, isUsernameValid, saveTokenInStorage } from '../../../util/helpers';
import { loginUser } from '../../../util/requests';
import { TextField, Grid, Button } from '@material-ui/core';

export const LoginForm = ({ setToken, alert, setAlert }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const styles = {
    icon: {
      width: '1.5rem',
      margin: '0 0.5rem 0.5rem 0'
    }
  }

  const handleUsernameChange = e => {
    let value = e.target.value;
    if (isUsernameValid(value))
      setUsername(value)
  }

  const handlePasswordChange = e => {
    let value = e.target.value;
    if (isPasswordValid(value))
      setPassword(value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = { username, password };
    loginUser(JSON.stringify(user)).then(res => {
      saveTokenInStorage(res.data.access_token);
      setToken(res.data.access_token);
      handleSuccessAlert('Signed in!', alert, setAlert);
    }).catch(err => handleErrorAlert(err, alert, setAlert));
  }

  return (
    <section className='auth-form-section'>
      <h2>Sign <b>Me</b> in</h2>

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
                autoComplete="off"
                value={username}
                onChange={handleUsernameChange} />
            </Grid>
          </Grid>
        </div>
        <div style={{ marginBottom: '2rem' }}>
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
                autoComplete="off"
                value={password}
                onChange={handlePasswordChange} />
            </Grid>
          </Grid>
        </div>
        <Button
          variant="contained" color="primary" type="submit"
          disabled={(!username || !password)}
        >
          Sign In
        </Button>
      </form>
    </section>
  )
}