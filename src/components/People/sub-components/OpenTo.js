import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'baseline',
  },
  item: {
    textAlign: 'left',
  },
  unorganizedList: {
    listStyle: 'none',
    margin: 0,
    padding: '0.5em',
  },
}));

const titleCase = str => {
  const title = str.replace(/-/gi, ' ');
  const titleChars = title.split('');

  return `${titleChars[0].toUpperCase()}${titleChars.slice(1).join('')}`;
};

const OpenTo = ({ openTo = [] }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="body1" className={classes.overline}>
          Open To:
        </Typography>
      </div>
      <div>
        <ul className={classes.unorganizedList}>
          <Typography variant="body1" className={classes.overline}>
            {openTo.map((ot, index) => (
              <li className={classes.item} key={index}>
                {titleCase(ot)}
              </li>
            ))}
          </Typography>
        </ul>
      </div>
    </div>
  );
};

export default OpenTo;
