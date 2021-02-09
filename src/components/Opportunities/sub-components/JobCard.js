import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';

// components
import Skills from './Skills';
import Compensation from './Compensation';
import Members from './Members';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '2em 0',
    display: 'flex',
    justifyContent: 'center',
  },
  overline: {
    lineHeight: 1.5,
  },
  paper: {
    padding: theme.spacing(2),
    width: 800,
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  avatarGroupItem: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  objective: {
    marginTop: '0.5em',
  },
  remote: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobDetails: {
    marginBottom: '0.5em',
  },
  generalInfo: {
    display: 'flex',
    padding: '1em 2em 1em',
    width: '45%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  skills: {
    width: '55%',
  },
  perks: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

const JobCard = ({ opportunity }) => {
  const {
    objective = '',
    type = '',
    organizations = [],
    remote = false,
    locations = [],
    compensation = {},
    members = [],
    skills = [],
  } = opportunity || {};
  const classes = useStyles();

  const organization = organizations[0];
  let typeDescription;

  switch (type) {
    case 'full-time-employment':
      typeDescription = 'Full-Time employment';
      break;
    case 'part-time-employment':
      typeDescription = 'Part-Time employment';
      break;
    default:
      typeDescription = 'Freelance-gigs';
  }

  let remoteDescription = 'Remote';

  if (locations.length) {
    if (locations.length > 3) {
      remoteDescription = `Remote - ${locations.slice(0, 2).join('; ')}; and more`;
    } else {
      remoteDescription = `Remote - ${locations.join('; ')}`;
    }
  }

  return (
    <div className={classes.root}>
      <ButtonBase disableRipple>
        <Paper className={classes.paper}>
          <div className={classes.avatarContainer}>
            <Avatar src={organization.picture} variant="rounded" className={classes.avatar} />
            <Typography gutterBottom variant="button" className={classes.objective}>
              {objective}
            </Typography>
            <div className={classes.jobDetails}>
              <Typography variant="overline" className={classes.overline}>
                {typeDescription}
              </Typography>
              {remote ? (
                <div className={classes.remote}>
                  <Icon style={{ fontSize: 17, marginRight: '0.4em' }}>public</Icon>
                  <Typography variant="overline" className={classes.overline}>
                    {remoteDescription}
                  </Typography>
                </div>
              ) : null}
            </div>
          </div>
          <Divider />
          <div className={classes.perks}>
            <div className={classes.generalInfo}>
              <Compensation compensation={compensation} />
              <Members members={members} />
            </div>
            <div className={classes.skills}>
              <Skills skills={skills} />
            </div>
          </div>
        </Paper>
      </ButtonBase>
    </div>
  );
};

export default JobCard;
