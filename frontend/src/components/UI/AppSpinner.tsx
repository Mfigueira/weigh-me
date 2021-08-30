import { CircularProgress } from '@material-ui/core';
import classes from './AppSpinner.module.scss';

interface AppSpinnerProps {
  size?: number;
}

const AppSpinner: React.FC<AppSpinnerProps> = ({ size = 15 }) => (
  <CircularProgress size={size} className={classes.spinner} />
);

export default AppSpinner;
