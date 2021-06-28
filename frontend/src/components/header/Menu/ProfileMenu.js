import { useContext, useState } from 'react';
import { AppContext } from '../../../store/app-context';
import { withStyles, Button, Menu, MenuItem } from '@material-ui/core';
import user from '../../../assets/img/user.svg';
import classes from './ProfileMenu.module.scss';
import { ProfileSkeleton } from './ProfileSkeleton';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
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

export const ProfileMenu = ({ onLogout }) => {
  const appCtx = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(null);

  const handleOpenMenu = event => setMenuOpen(event.currentTarget);
  const handleCloseMenu = () => setMenuOpen(null);

  const handleLogout = () => {
    handleCloseMenu();
    onLogout();
    appCtx.onSuccessAlert('Logged out, bye!');
  };

  return !appCtx.profile ? (
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
        {appCtx.profile.name}
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
