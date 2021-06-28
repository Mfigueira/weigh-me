import ReactDOM from 'react-dom';
import classes from './AppSnackbar.module.scss';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useContext } from 'react';
import AppContext from '../../../store/app-context';

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

export const AppSnackbar = () => {
  const ctx = useContext(AppContext);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') return;
    ctx.setAlert(alert => ({
      ...alert,
      open: false,
    }));
  };

  const setTopPosition = () => {
    const footer = document.querySelector('footer');
    return `${12 + (footer?.clientHeight ?? 0)}px`;
  };

  return ReactDOM.createPortal(
    <Snackbar
      className={classes.snackbar}
      open={ctx.alert.open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={handleClose}
      style={{ bottom: setTopPosition(), position: 'fixed' }}
    >
      <Alert
        onClose={handleClose}
        severity={ctx.alert.severity}
        style={{ fontSize: '1rem' }}
      >
        {ctx.alert.message}
      </Alert>
    </Snackbar>,
    document.getElementById('modals-root')
  );
};
