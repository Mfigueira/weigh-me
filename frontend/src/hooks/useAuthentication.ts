import { useState } from 'react';
import { isPasswordValid, isUsernameValid } from '../util/helpers';
import { loginUser, registerUser } from '../util/http';
import { useActions } from './useActions';

export enum AuthType {
  SIGN_IN,
  SIGN_UP,
}

export const useAuthentication = (type: AuthType) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [loading, setLoading] = useState(false);

  const { authenticateUser, showSuccessNotification, showErrorNotification } =
    useActions();

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
      let res: any;
      if (type === AuthType.SIGN_IN) {
        res = await loginUser({ username, password });
        showSuccessNotification(`Hi, ${username}!`);
      }

      if (type === AuthType.SIGN_UP) {
        res = await registerUser({ username, password, confirmation });
        showSuccessNotification(`Wellcome, ${username}!`);
      }

      authenticateUser({
        token: res.data.access_token,
        username,
      });
    } catch (err) {
      showErrorNotification(err);
      setLoading(false);
    }
  };

  return {
    username,
    password,
    confirmation,
    loading,
    handleUsernameChange,
    handlePasswordChange,
    handleConfirmationChange,
    handleSubmit,
  };
};
