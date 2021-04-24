import '../../../assets/styles/AuthForms.css';
import user from '../../../assets/img/user.svg';
import key from '../../../assets/img/key.svg';
import { useState } from 'react';
import { saveTokenInStorage } from '../../../util/helpers';
import { loginUser } from '../../../util/requests';
import { TextField, InputAdornment, Button } from '@material-ui/core';

export const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = { username, password };
    loginUser(JSON.stringify(user)).then(res => {
      saveTokenInStorage(res.data.access_token);
      setToken(res.data.access_token);
    }).catch(err => {
      console.error(err);
      console.log(err.response.data);
    });
  }

  return (
    <section className='auth-form-section'>
      <h2>Let's <p><b>Weigh Me!</b></p></h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <TextField
            autoFocus label="Username" autoComplete="off" required
            value={username} onChange={e => setUsername(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={user} style={{ width: '1.5rem' }} alt='user' />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <TextField
            type="password" label="Password" autoComplete="off" required
            value={password} onChange={e => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={key} style={{ width: '1.5rem' }} alt='password' />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">Sign In</Button>
      </form>
    </section>
  )
}