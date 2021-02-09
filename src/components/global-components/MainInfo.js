import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  objective: {
    marginTop: '0.5em',
  },
  jobDetails: {
    marginBottom: '0.5em',
  },
  overline: {
    lineHeight: 1.5,
  },
}));

const MainInfo = ({ title = '', subTitle = '', picture = '', children = null }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src={picture} variant="rounded" className={classes.avatar} />
      <Typography gutterBottom variant="button" className={classes.objective}>
        {title}
      </Typography>
      <div className={classes.jobDetails}>
        <Typography variant="overline" className={classes.overline}>
          {subTitle}
        </Typography>
        {children}
      </div>
    </div>
  );
};

export default MainInfo;
