import user from '../../../assets/img/user.svg';

import { useContext, useEffect, useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import ProfileSkeleton from './ProfileSkeleton';
import { NotificationsContext } from '../../../store/NotificationsContext';
import { AuthContext } from '../../../store/AuthContext';
import { getProfile } from '../../../util/http';
import { Profile } from '../../../models';
import classes from './ProfileMenu.module.scss';

const defaultProfile: Profile = {
  username: '',
};

const ProfileMenu: React.FC = () => {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [menuOpen, setMenuOpen] = useState<Element | null>(null);

  const { onSuccessAlert, onErrorAlert } = useContext(NotificationsContext);
  const { token, onLogout } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        const profileRes = await getProfile(token!);
        setProfile(profileRes.data);
      } catch (err) {
        setProfile(defaultProfile);
        onLogout();
        onErrorAlert('Could not get profile data');
      }
    })();
  }, [token, onLogout, onErrorAlert]);

  const handleOpenMenu = (event: any) => setMenuOpen(event.currentTarget);
  const handleCloseMenu = () => setMenuOpen(null);

  const handleLogout = () => {
    handleCloseMenu();
    onLogout();
    onSuccessAlert('Logged out, bye!');
  };

  return !profile.username ? (
    <ProfileSkeleton />
  ) : (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        className={classes.btn}
      >
        <img src={user} alt="user" />
        {profile.username}
      </Button>
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
        anchorEl={menuOpen}
        keepMounted
        open={Boolean(menuOpen)}
        onClose={handleCloseMenu}
        className={classes.menu}
      >
        <MenuItem onClick={handleLogout}>
          <span className={classes.link}>Sign Out</span>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
