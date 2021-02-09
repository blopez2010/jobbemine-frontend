import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/core/AvatarGroup';

const useStyles = makeStyles(() => ({
  overline: {
    lineHeight: 1.5,
  },
  members: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const Compensation = ({ members }) => {
  const classes = useStyles();

  return (
    <div className={classes.members}>
      <Typography variant="body1" className={classes.overline}>
        Team Members
      </Typography>
      <AvatarGroup max={4}>
        {members.map(member => (
          <Avatar key={member.username} alt={member.name} src={member.picture} />
        ))}
      </AvatarGroup>
    </div>
  );
};

export default Compensation;
