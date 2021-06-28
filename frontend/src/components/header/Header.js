import { useContext } from 'react';
import { AuthContext } from '../../store/auth-context';
import { Navbar } from './Navbar';
import { ProfileMenu } from './Menu/ProfileMenu';
import { AuthenticationMenu } from './Menu/AuthenticationMenu';
import { AppBar, Toolbar } from '@material-ui/core';
import classes from './Header.module.scss';
import logo from '../../assets/img/scale.svg';

export const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.icon} alt="scale" />
          <h1>WeighMe</h1>

          {authCtx.token && <ProfileMenu onLogout={authCtx.onLogout} />}
          {!authCtx.token && <AuthenticationMenu />}
        </Toolbar>
      </AppBar>
      {authCtx.token && <Navbar />}
    </div>
  );
};
