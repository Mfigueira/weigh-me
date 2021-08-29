import { useTypedSelector } from '../../hooks/useTypedSelector';
import Weighings from './weighings/Weighings';
import AuthForms from './auth/AuthForms';
import classes from './Main.module.scss';

const Main: React.FC = () => {
  const token = useTypedSelector((state) => state.authUser.token);

  const setPaddingTop = () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    return `${Math.max(
      40 + (header?.clientHeight ?? 0) + (nav?.clientHeight ?? 0),
      134
    )}px`;
  };

  return (
    <main className={classes.main} style={{ paddingTop: setPaddingTop() }}>
      {token ? <Weighings /> : <AuthForms />}
    </main>
  );
};

export default Main;
