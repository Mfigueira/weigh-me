import { useContext } from 'react';
import { AuthContext } from '../../store/authContext';
import { AppBar, Toolbar } from '@material-ui/core';
import Navbar from './Navbar';
import ProfileMenu from './Menu/ProfileMenu';
import AuthenticationMenu from './Menu/AuthenticationMenu';
import classes from './Header.module.scss';
import logo from '../../assets/img/scale.svg';

const Header = () => {
  const { token } = useContext(AuthContext);

  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.icon} alt="scale" />
          <h1>WeighMe</h1>

          {token && <ProfileMenu />}
          {!token && <AuthenticationMenu />}
        </Toolbar>
      </AppBar>
      {token && <Navbar />}
    </div>
  );
};

export default Header;
