import '../../assets/styles/Header.css';
import logo from '../../assets/img/scale.svg';
import user from '../../assets/img/user.svg';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navbar } from './Navbar';
import {
  withStyles,
  AppBar,
  Toolbar,
  Button,
  ButtonGroup,
  Avatar,
  Menu,
  MenuItem
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { handleSuccessAlert, removeTokenFromStorage } from '../../util/helpers';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

export const Header = ({ token, setToken, alert, setAlert, profile, setProfile, tabValue, setTabValue }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const logout = () => {
    handleClose();
    removeTokenFromStorage();
    setToken(null);
    setProfile(null);
    history.push('/');
    setTabValue(0);
    handleSuccessAlert('Signed out.', alert, setAlert);
  }

  const styles = {
    icon: {
      width: '1.75rem',
      marginRight: '0.5rem'
    },
    authButton: {
      color: '#fff',
      borderColor: '#fff',
      padding: '0'
    },
    buttonLink: {
      display: 'inline-block',
      color: 'inherit',
      lineHeight: '1rem',
      textDecoration: 'none',
      padding: '0.4rem 0.8rem'
    }
  }

  return (
    <div style={{ position: 'fixed', top: 0, width: '100%', maxWidth: '900px', zIndex: 999 }}>
      <AppBar position='static'>
        <Toolbar>
          <img src={logo} style={styles.icon} alt='scale' />
          <h1>WeighMe</h1>
          {token ? (
            profile ?
              <>
                <Button
                  aria-controls="simple-menu" aria-haspopup="true"
                  onClick={handleClick}
                  style={{ color: '#fff', textTransform: 'none', overflow: 'hidden' }}
                >
                  <img src={user} style={styles.icon} alt='user' />
                  {profile.name}
                </Button>
                <StyledMenu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={logout} style={{ padding: '0' }}>
                    <span style={{ ...styles.buttonLink, padding: '0.6rem 1.1rem' }}>
                      Sign Out
                    </span>
                  </MenuItem>
                </StyledMenu>
              </>
              :
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Skeleton width='26px' height='26px' variant='circle'
                  style={{ backgroundColor: 'rgba(203, 213, 224, 0.7)', marginRight: '10px' }}
                >
                  <Avatar />
                </Skeleton>
                <Skeleton width='100px' height='16px' variant='rect'
                  style={{ backgroundColor: 'rgba(203, 213, 224, 0.7)', borderRadius: '2px' }}
                />
              </div>
          )
            :
            <ButtonGroup variant="text" aria-label="authenticate user actions">
              <Button style={styles.authButton}>
                <Link to='/' style={styles.buttonLink}>Sign In</Link>
              </Button>
              <Button style={styles.authButton}>
                <Link to='/register' style={styles.buttonLink}>New user</Link>
              </Button>
            </ButtonGroup>
          }
        </Toolbar>
      </AppBar>
      {
        token ?
          <Navbar tabValue={tabValue} setTabValue={setTabValue} />
          :
          <></>
      }
    </div>
  );
}