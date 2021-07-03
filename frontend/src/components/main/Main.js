import classes from './Main.module.scss';
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';
import { Weighings } from './Weighings/Weighings';
import { AuthForms } from './AuthForms/AuthForms';
import { WeighingsContextProvider } from '../../store/WeighingsContext';

export const Main = () => {
  const { token } = useContext(AuthContext);

  const setPaddingTop = () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    return `${Math.max(
      40 + (header?.clientHeight ?? 0) + (nav?.clientHeight ?? 0),
      104
    )}px`;
  };

  return (
    <main className={classes.main} style={{ paddingTop: setPaddingTop() }}>
      {token ? (
        <WeighingsContextProvider>
          <Weighings token={token} />
        </WeighingsContextProvider>
      ) : (
        <AuthForms />
      )}
    </main>
  );
};
