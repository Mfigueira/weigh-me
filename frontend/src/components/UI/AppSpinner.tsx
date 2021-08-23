import { CircularProgress } from '@material-ui/core';

const AppSpinner: React.FC = () => (
  <CircularProgress size={15} style={{ position: 'absolute' }} />
);

export default AppSpinner;
