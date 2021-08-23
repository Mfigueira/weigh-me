import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import classes from './AuthenticationMenu.module.scss';

const AuthenticationMenu: React.FC = () => (
  <ButtonGroup
    variant="text"
    aria-label="authentication"
    className={classes.group}
  >
    <Button className={classes.btn}>
      <Link to="/" className={classes.link}>
        Sign In
      </Link>
    </Button>
    <Button className={classes.btn}>
      <Link to="/register" className={classes.link}>
        New user
      </Link>
    </Button>
  </ButtonGroup>
);

export default AuthenticationMenu;
