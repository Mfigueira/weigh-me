import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import { Button, Menu, MenuItem } from '@material-ui/core';
import ProfileSkeleton from './ProfileSkeleton';
import classes from './ProfileMenu.module.scss';
import user from '../../../assets/img/user.svg';

const ProfileMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<Element | null>(null);
  const username = useTypedSelector((state) => state.authUser.username);
  const { setProfile, logoutUser, showSuccessNotification } = useActions();

  useEffect(() => {
    if (!username) setProfile();
  }, [username, setProfile]);

  const handleOpenMenu = (event: any) => setMenuOpen(event.currentTarget);
  const handleCloseMenu = () => setMenuOpen(null);

  const handleLogout = () => {
    handleCloseMenu();
    showSuccessNotification(`Bye, ${username}!`);
    logoutUser();
  };

  return !username ? (
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
        {username}
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
