import React from 'react';
import { PropTypes } from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import Progress from '../ui/progress/Progress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '&:not(.fetching__no-padding)': {
      padding: theme.spacing(2),
    },
  },
}));

const Fetching = React.memo(
  ({ fetching, children, styles = null }) => {
    const classes = useStyles();

    return (
      fetching
        ? (
          <div className={clsx(classes.root, styles)}>
            <Progress size={24} />
          </div>
        )
        : children
    );
  }
);

Fetching.propTypes = {
  fetching: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  styles: PropTypes.object
};

Fetching.defaultProps = {
  fetching: false,
  children: null,
  styles: null,
};

export default Fetching;
