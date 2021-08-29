import alert from '../../../../assets/img/alert.svg';
import { GridOverlay } from '@material-ui/data-grid';
import classes from './ZeroStateGrid.module.scss';

const ZeroStateGrid: React.FC = () => (
  <GridOverlay className={classes.overlay}>
    <img src={alert} alt="alert" />
    <i>No Weighings to show</i>
  </GridOverlay>
);

export default ZeroStateGrid;
