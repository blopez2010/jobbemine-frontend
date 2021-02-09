import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: '1em',
  },
}));

const ActionButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        VIEW
      </Button>
      <Button variant="outlined">REFER SOMEONE</Button>
      <Button variant="outlined">ASK A QUESTION</Button>
    </div>
  );
};

export default ActionButtons;
