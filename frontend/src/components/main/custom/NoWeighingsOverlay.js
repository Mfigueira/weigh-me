import alert from '../../../assets/img/alert.svg';
import { GridOverlay } from '@material-ui/data-grid';

export const NoWeighingsOverlay = () => {
  return (
    <GridOverlay style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={alert} alt='alert' style={{ marginRight: '10px', width: '50px' }} />
      <i>No Weighings to show</i>
    </GridOverlay>
  );
}
