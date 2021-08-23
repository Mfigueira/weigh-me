import { CircularProgress } from '@material-ui/core';
import classes from './AppSpinner.module.scss';

const AppSpinner: React.FC = () => (
  <CircularProgress size={15} className={classes.spinner} />
);

export default AppSpinner;
