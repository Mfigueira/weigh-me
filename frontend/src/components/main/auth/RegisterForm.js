import '../../../assets/styles/AuthForms.css';
import { useState } from 'react';
import { saveTokenInStorage } from '../../../util/helpers';
import { registerUser } from '../../../util/requests';
import { TextField, InputAdornment, Button } from '@material-ui/core';
import user from '../../../assets/img/user.svg';
import key from '../../../assets/img/key.svg';
import doubleKey from '../../../assets/img/double-key.svg';

export const RegisterForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = { username, password, confirmation };
    registerUser(JSON.stringify(user)).then(res => {
      saveTokenInStorage(res.data.access_token);
      setToken(res.data.access_token);
    }).catch(err => {
      console.error(err);
      console.log(err.response.data);
    });
  }

  return (
    <section className='auth-form-section'>
      <h2>Register <b>Me</b></h2>

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
        <div style={{ marginBottom: '1rem' }}>
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
        <div style={{ marginBottom: '1.5rem' }}>
          <TextField
            type="password" label="Confirm Password" autoComplete="off" required
            value={confirmation} onChange={e => setConfirmation(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={doubleKey} style={{ width: '1.5rem' }} alt='confirm' />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">Sign Up</Button>
      </form>
    </section>
  )
}