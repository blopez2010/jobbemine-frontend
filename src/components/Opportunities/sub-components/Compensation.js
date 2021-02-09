import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  overline: {
    lineHeight: 1.5,
  },
}));

const Compensation = ({ compensation }) => {
  const classes = useStyles();
  const { currency, code, minAmount, maxAmount, periodicity } = compensation.data || {};

  const kFormatter = (num, decimals = 0) => {
    const si = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    // eslint-disable-next-line no-plusplus
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return `${(num / si[i].value).toFixed(decimals).replace(rx, '$1')}${si[i].symbol}`;
  };

  let compensationDescription = `${currency} ${kFormatter(minAmount)}`;
  if (code === 'range') {
    compensationDescription = `${compensationDescription} - ${kFormatter(maxAmount)}`;
  }

  return (
    <>
      {compensation.data ? (
        <Typography variant="body1" className={classes.overline}>
          Compensation {compensationDescription}/{periodicity}
        </Typography>
      ) : null}
    </>
  );
};

export default Compensation;
