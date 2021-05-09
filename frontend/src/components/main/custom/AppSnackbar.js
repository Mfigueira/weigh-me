import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = props => <MuiAlert elevation={6} variant='filled' {...props} />;

export const AppSnackbar = ({ open, setAlert, message, severity }) => {

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') return;
    setAlert({
      open: false,
      message: message,
      severity: severity
    });
  };

  const setTopPosition = () => {
    const footer = document.getElementsByTagName('footer')[0];
    let h = 10;
    if (footer) h += footer.clientHeight;
    return `${h}px`;
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={handleClose}
      style={{ bottom: setTopPosition(), position: 'absolute' }}
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
}
