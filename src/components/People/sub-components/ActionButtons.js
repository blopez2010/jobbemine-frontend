import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        SIGNAL
      </Button>
      <Button variant="outlined">
        MESSAGE
      </Button>
      <Button variant="outlined">VIEW GENOME</Button>
    </div>
  );
};

export default ActionButtons;
