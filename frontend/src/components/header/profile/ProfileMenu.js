import { useContext, useEffect, useState } from 'react';
import { withStyles, Button, Menu, MenuItem } from '@material-ui/core';
import user from '../../../assets/img/user.svg';
import classes from './ProfileMenu.module.scss';
import ProfileSkeleton from './ProfileSkeleton';
import { getProfile } from '../../../util/http';
import { NotificationsContext } from '../../../store/NotificationsContext';
import { AuthContext } from '../../../store/AuthContext';

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

const ProfileMenu = () => {
  const [profile, setProfile] = useState({});
  const [menuOpen, setMenuOpen] = useState(null);

  const { onSuccessAlert, onErrorAlert } = useContext(NotificationsContext);
  const { token, onLogout } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        const profileRes = await getProfile(token);
        setProfile(profileRes.data);
      } catch (err) {
        setProfile({});
        onLogout();
        onErrorAlert('Could not get profile data');
      }
    })();
  }, [token, onLogout, onErrorAlert]);

  const handleOpenMenu = (event) => setMenuOpen(event.currentTarget);
  const handleCloseMenu = () => setMenuOpen(null);

  const handleLogout = () => {
    handleCloseMenu();
    onLogout();
    onSuccessAlert('Logged out, bye!');
  };

  return !profile ? (
    <ProfileSkeleton />
  ) : (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        style={{
          color: '#fff',
          textTransform: 'none',
          overflow: 'hidden',
        }}
      >
        <img src={user} className={classes.icon} alt="user" />
        {profile.username}
      </Button>
      <StyledMenu
        anchorEl={menuOpen}
        keepMounted
        open={Boolean(menuOpen)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleLogout} style={{ padding: '0' }}>
          <span className={classes.link}>Sign Out</span>
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default ProfileMenu;
