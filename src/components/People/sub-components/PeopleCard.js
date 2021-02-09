import React from 'react';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

// Components
import ActionButtons from './ActionButtons';
import MainInfo from '../../global-components/MainInfo';
import OpenTo from './OpenTo';
import Skills from '../../global-components/Skills';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '2em 0',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    width: 800,
  },
  avatarGroupItem: {
    width: theme.spacing(3),
    height: theme.spacing(3),
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
    height: '10em',
    overflow: 'hidden',
  },
  perks: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '1em',
  },
  overline: {
    lineHeight: 1.5,
  },
}));

const PeopleCard = ({ people }) => {
  const {
    name = '',
    professionalHeadline = '',
    username = '',
    skills = [],
    openTo = [],
    locationName = '',
    picture = {},
  } = people || {};
  const classes = useStyles();

  const skillsToBeSorted = [...skills];

  return (
    <div className={classes.root}>
      <ButtonBase disableRipple>
        <Paper className={classes.paper}>
          <MainInfo title={name} subTitle={professionalHeadline} picture={picture}>
            <Typography variant="overline" className={classes.overline}>
              {locationName}
            </Typography>
          </MainInfo>
          <Divider />
          <div className={classes.perks}>
            <div className={classes.generalInfo}>
              <OpenTo openTo={openTo} />
            </div>
            <div className={classes.skills}>
              <Skills skills={skillsToBeSorted.sort((a, b) => b.weight - a.weight)} />
            </div>
          </div>
          <Divider />
          <ActionButtons />
        </Paper>
      </ButtonBase>
    </div>
  );
};

export default PeopleCard;
