import '../../assets/styles/Header.css';
import logo from '../../assets/img/scale.svg';
import user from '../../assets/img/user.svg';
import { useState } from 'react';
import { removeTokenFromStorage } from '../../util/helpers';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Button, Avatar, Menu, MenuItem, ButtonGroup } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Navbar } from './Navbar';

export const Header = ({ token, setToken, profile, setProfile, tabValue, setTabValue }) => {
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
  }

  const styles = {
    icon: {
      width: '1.75rem',
      marginRight: '0.5rem'
    },
    authButton: {
      color: '#fff',
      padding: '0.4rem 0.8rem',
      lineHeight: '1rem',
      borderColor: '#fff'
    },
    buttonLink: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <img src={logo} style={styles.icon} alt='scale' />
          <h1>WeighMe</h1>
          {token ? (
            profile ?
              <>
                <Button aria-controls="simple-menu" aria-haspopup="true"
                  onClick={handleClick} style={{ color: '#fff', textTransform: 'none' }}>
                  <img src={user} style={styles.icon} alt='user' />
                  {profile.name}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to='/profile' style={styles.buttonLink}>Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={logout}>Log Out</MenuItem>
                </Menu>
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
                <Link to='/' style={styles.buttonLink}>Log In</Link>
              </Button>
              <Button style={styles.authButton}>
                <Link to='/register' style={styles.buttonLink}>New User</Link>
              </Button>
            </ButtonGroup>
          }
        </Toolbar>
      </AppBar>
      {token ?
        <Navbar tabValue={tabValue} setTabValue={setTabValue} />
        :
        <></>
      }
    </>
  );
}