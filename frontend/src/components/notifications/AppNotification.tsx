import ReactDOM from 'react-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import classes from './AppNotification.module.scss';

const Alert: React.FC<any> = (props) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

const AppNotification: React.FC = () => {
  const notification = useTypedSelector((state) => state.notification);
  const { hideNotification } = useActions();

  const handleClose = (_: React.SyntheticEvent, reason: string) => {
    if (reason === 'clickaway') return;
    hideNotification();
  };

  return ReactDOM.createPortal(
    <Snackbar
      className={classes.snackbar}
      open={notification.open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert
        className={classes.text}
        severity={notification.severity}
        onClose={handleClose}
      >
        {notification.message}
      </Alert>
    </Snackbar>,
    document.getElementById('notifications-root')!
  );
};

export default AppNotification;
