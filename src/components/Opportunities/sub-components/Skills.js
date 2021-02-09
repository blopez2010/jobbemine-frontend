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
      {skills.map(sk => {
        const description = `${sk.name} - ${sk.experience.replaceAll(/-/ig, ' ').replace('plus', '+')}`;

        return <Chip key={sk.name} label={description} />;
      })}
    </div>
  );
};

export default Skills;
