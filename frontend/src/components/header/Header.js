import '../../assets/styles/Header.css';
import logo from '../../assets/img/scale.svg';
import user from '../../assets/img/user.svg';
import React from 'react';
import { removeTokenFromStorage } from '../../util/helpers';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { AppBar, Tabs, Tab, Toolbar, Button, Avatar, Menu, MenuItem } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export const Header = ({ token, setToken, profile, setProfile }) => {
  const navRoutes = [
    {
      path: '/',
      tab: 0
    },
    {
      path: '/weighings',
      tab: 1
    },
    {
      path: '/register',
      tab: 1
    }
  ];

  const location = useLocation();

  const getTabByRoute = (routes, currentPath) => {
    try {
      return routes.filter(route => route.path === currentPath)[0].tab;
    } catch {
      return 0;
    }
  };

  const [value, setValue] = React.useState(getTabByRoute(navRoutes, location.pathname));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const a11yProps = index => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    if (token)
      (newValue === 0) ? history.push('/') : history.push('/weighings');
    else
      (newValue === 0) ? history.push('/') : history.push('/register');
    setValue(newValue);
  };

  const styles = {
    icon: {
      width: '1.75rem',
      marginRight: '0.5rem'
    }
  }

  const history = useHistory();

  const logout = () => {
    removeTokenFromStorage();
    setToken(null);
    setProfile(null);
    history.push('/');
    setValue(0);
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
                    <Link to='/profile'>Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={() => {
                    handleClose();
                    logout();
                  }}>Log Out</MenuItem>
                </Menu>
              </>
              :
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Skeleton
                  width='26px'
                  height='26px'
                  style={{ marginRight: '10px', backgroundColor: 'rgba(203, 213, 224, 0.7)' }}
                  variant='circle'
                >
                  <Avatar />
                </Skeleton>
                <Skeleton variant='rect' width='100px' height='16px'
                  style={{ backgroundColor: 'rgba(203, 213, 224, 0.7)', borderRadius: '2px' }}
                />
              </div>
          )
            :
            <></>
          }
        </Toolbar>
      </AppBar>
      <nav>
        {token ?
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
            aria-label='navbar'
          >
            <Tab label='New Weighing' {...a11yProps(0)} />
            <Tab label='Weighings' {...a11yProps(1)} />
          </Tabs>
          :
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
            aria-label='navbar'
          >
            <Tab label='Log In' {...a11yProps(0)} />
            <Tab label='Register' {...a11yProps(1)} />
          </Tabs>
        }
      </nav>
    </>
  );
}