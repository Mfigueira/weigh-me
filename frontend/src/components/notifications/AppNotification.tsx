import { useContext } from 'react';
import ReactDOM from 'react-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { NotificationsContext } from '../../store/NotificationsContext';
import classes from './AppNotification.module.scss';

const Alert: React.FC<any> = (props) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

const AppNotification: React.FC = () => {
  const { alert, onCloseAlert } = useContext(NotificationsContext);

  const handleClose = (_: React.SyntheticEvent, reason: string) => {
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
      style={{ bottom: setTopPosition() }}
      open={alert.open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert
        className={classes.text}
        severity={alert.severity}
        onClose={handleClose}
      >
        {alert.message}
      </Alert>
    </Snackbar>,
    document.getElementById('modals-root')!
  );
};

export default AppNotification;
