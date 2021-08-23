import { Avatar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const ProfileSkeleton: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Skeleton
      width="26px"
      height="26px"
      variant="circle"
      style={{
        backgroundColor: 'rgba(203, 213, 224, 0.7)',
        marginRight: '10px',
      }}
    >
      <Avatar />
    </Skeleton>
    <Skeleton
      width="100px"
      height="16px"
      variant="rect"
      style={{
        backgroundColor: 'rgba(203, 213, 224, 0.7)',
        borderRadius: '2px',
      }}
    />
  </div>
);

export default ProfileSkeleton;
