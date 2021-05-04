import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = props => <MuiAlert elevation={6} variant='filled' {...props} />;

export const CustomSnackbar = ({ open, setAlert, message, severity }) => {

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') return;
    setAlert({
      open: false,
      message: message,
      severity: severity
    });
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
