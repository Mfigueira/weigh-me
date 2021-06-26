import classes from './AppSnackbar.module.scss';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

export const AppSnackbar = ({ open, setAlert, message, severity }) => {
  const handleClose = (_e, reason) => {
    if (reason === 'clickaway') return;
    setAlert({
      open: false,
      message: message,
      severity: severity,
    });
  };

  const setTopPosition = () => {
    const footer = document.querySelector('footer');
    return `${12 + (footer?.clientHeight ?? 0)}px`;
  };

  return (
    <Snackbar
      className={classes.snackbar}
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={handleClose}
      style={{ bottom: setTopPosition(), position: 'fixed' }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        style={{ fontSize: '1rem' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
