import ReactDOM from 'react-dom';
import classes from './AppNotification.module.scss';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useContext } from 'react';
import { NotificationsContext } from '../../../store/NotificationsContext';

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

export const AppNotification = () => {
  const { alert, onCloseAlert } = useContext(NotificationsContext);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') return;
    onCloseAlert();
  };

  const setTopPosition = () => {
    const footer = document.querySelector('footer');
    return `${12 + (footer?.clientHeight ?? 0)}px`;
  };

  return ReactDOM.createPortal(
    <Snackbar
      className={classes.snackbar}
      open={alert.open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={handleClose}
      style={{ bottom: setTopPosition(), position: 'fixed' }}
    >
      <Alert
        onClose={handleClose}
        severity={alert.severity}
        style={{ fontSize: '1rem' }}
      >
        {alert.message}
      </Alert>
    </Snackbar>,
    document.getElementById('modals-root')
  );
};
