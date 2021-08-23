import './AuthForms.scss';
import user from '../../../assets/img/user.svg';
import key from '../../../assets/img/key.svg';
import doubleKey from '../../../assets/img/double-key.svg';
import { useContext, useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { isPasswordValid, isUsernameValid } from '../../../util/helpers';
import { registerUser } from '../../../util/http';
import { AuthContext } from '../../../store/AuthContext';
import { NotificationsContext } from '../../../store/NotificationsContext';
import AppSpinner from '../../UI/AppSpinner';
import AuthForm from '../../UI/AuthForm';

const RegisterForm: React.FC = () => {
  const { onLogin } = useContext(AuthContext);
  const { onSuccessAlert, onErrorAlert } = useContext(NotificationsContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [loading, setLoading] = useState(false);

  const styles = {
    icon: {
      width: '1.5rem',
      margin: '0 0.5rem 1.85rem 0',
    },
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    isUsernameValid(event.target.value) && setUsername(event.target.value);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    isPasswordValid(event.target.value) && setPassword(event.target.value);

  const handleConfirmationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) =>
    isPasswordValid(event.target.value) && setConfirmation(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const user = { username, password, confirmation };
      const res = await registerUser(user);
      onLogin(res.data.access_token);
      onSuccessAlert(`Wellcome, ${username}!`);
    } catch (err) {
      onErrorAlert(err);
    }
    setLoading(false);
  };

  return (
    <section className="auth-form-section">
      <h2>
        Register <b>Me</b>
      </h2>

      <AuthForm onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <img src={user} style={styles.icon} alt="user" />
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
        <div style={{ marginBottom: '1rem' }}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <img src={key} style={styles.icon} alt="password" />
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
        <div style={{ marginBottom: '1.5rem' }}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <img src={doubleKey} style={styles.icon} alt="confirm" />
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
