import './AuthForms.scss';
import user from '../../../assets/img/user.svg';
import key from '../../../assets/img/key.svg';
import { useContext, useState } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { isPasswordValid, isUsernameValid } from '../../../util/helpers';
import { loginUser } from '../../../util/http';
import { AuthContext } from '../../../store/AuthContext';
import { NotificationsContext } from '../../../store/NotificationsContext';
import AppSpinner from '../../UI/AppSpinner';
import AuthForm from '../../UI/AuthForm';

const LoginForm: React.FC = () => {
  const { onLogin } = useContext(AuthContext);
  const { onSuccessAlert, onErrorAlert } = useContext(NotificationsContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const styles = {
    icon: {
      width: '1.5rem',
      margin: '0 0.5rem 0.5rem 0',
    },
  };

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
    }
    setLoading(false);
  };

  return (
    <section className="auth-form-section">
      <h2>
        Sign <b>Me</b> in
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
                autoComplete="off"
                value={username}
                onChange={handleUsernameChange}
              />
            </Grid>
          </Grid>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <img src={key} style={styles.icon} alt="password" />
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
