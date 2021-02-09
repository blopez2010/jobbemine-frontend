import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    padding: '1em',
  },
}));

const Skills = ({ skills = [] }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {skills.map((sk, index) => {
        if (sk.experience) {
          return (
            <Chip
              key={index}
              label={`${sk.name} - ${sk.experience.replaceAll(/-/gi, ' ').replace('plus', '+')}`}
            />
          );
        }

        if (sk.weight) {
          return <Chip key={index} label={`${sk.name} - ${Math.round(sk.weight)}`} />;
        }

        return <Chip key={index} label={sk.name} />;
      })}
    </div>
  );
};

export default Skills;
