import { Avatar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import classes from './ProfileSkeleton.module.scss';

const ProfileSkeleton: React.FC = () => (
  <div className={classes.skeleton}>
    <Skeleton
      width="26px"
      height="26px"
      variant="circle"
      className={classes.avatar}
    >
      <Avatar />
    </Skeleton>
    <Skeleton
      width="100px"
      height="16px"
      variant="rect"
      className={classes.profile}
    />
  </div>
);

export default ProfileSkeleton;
