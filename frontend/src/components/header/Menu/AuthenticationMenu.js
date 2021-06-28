import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import classes from './AuthenticationMenu.module.scss';

export const AuthenticationMenu = () => (
  <ButtonGroup variant="text" aria-label="authentication">
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
