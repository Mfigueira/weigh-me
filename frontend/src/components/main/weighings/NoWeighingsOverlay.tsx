import alert from '../../../assets/img/alert.svg';
import { GridOverlay } from '@material-ui/data-grid';
import classes from './NoWeighingsOverlay.module.scss';

const NoWeighingsOverlay: React.FC = () => (
  <GridOverlay className={classes.overlay}>
    <img src={alert} alt="alert" />
    <i>No Weighings to show</i>
  </GridOverlay>
);

export default NoWeighingsOverlay;
