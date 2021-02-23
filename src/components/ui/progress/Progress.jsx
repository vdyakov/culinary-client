import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import theme from '../../../theme';

const useStylesFacebook = makeStyles({
  root: {
    position: 'relative',
  },
  top: {
    color: theme.palette.common.black,
    animationDuration: '750ms',
  },
});

const UserProgress = (props) => {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        thickness={3}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
};

export default UserProgress;
