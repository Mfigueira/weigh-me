import logo from '../../assets/img/scale.svg';

import { useContext } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Navbar from './Navbar';
import ProfileMenu from './profile/ProfileMenu';
import AuthenticationMenu from './profile/AuthenticationMenu';
import { AuthContext } from '../../store/AuthContext';
import classes from './Header.module.scss';

const Header: React.FC = () => {
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
