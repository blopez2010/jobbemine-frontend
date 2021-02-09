import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';

// components
import ActionButtons from './ActionButtons';
import Compensation from './Compensation';
import MainInfo from '../../global-components/MainInfo';
import Members from './Members';
import Skills from '../../global-components/Skills';

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
  remote: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
          <MainInfo title={objective} subTitle={typeDescription} picture={organization.picture}>
            <Typography variant="overline" className={classes.overline}>
              {remote ? (
                <div className={classes.remote}>
                  <Icon style={{ fontSize: 17, marginRight: '0.4em' }}>public</Icon>
                  <Typography variant="overline" className={classes.overline}>
                    {remoteDescription}
                  </Typography>
                </div>
              ) : null}
            </Typography>
          </MainInfo>
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
          <Divider />
          <ActionButtons />
        </Paper>
      </ButtonBase>
    </div>
  );
};

export default JobCard;
