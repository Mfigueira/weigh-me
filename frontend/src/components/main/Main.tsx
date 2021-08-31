import { useTypedSelector } from '../../hooks/useTypedSelector';
import Weighings from './weighings/Weighings';
import AuthForms from './auth/AuthForms';
import classes from './Main.module.scss';

const Main: React.FC = () => {
  const token = useTypedSelector((state) => state.authUser.token);

  return (
    <main className={classes.main}>
      {token ? <Weighings /> : <AuthForms />}
    </main>
  );
};

export default Main;
