import { Link } from 'react-router-dom';
import {
  ListItem, ListItemIcon, ListItemText, Tooltip
} from '@material-ui/core';
import React from 'react';
import { PropTypes } from 'prop-types';

const ListItemLink = (props) => {
  const { icon, primary, to } = props;

  const CustomLink = React.useMemo(
    () => React.forwardRef((linkProps, ref) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Link ref={ref} to={to} {...linkProps} />
    )),
    [to],
  );

  return (
    <Tooltip title={primary} enterDelay={100} leaveDelay={100}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ListItem button component={CustomLink} {...props}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </Tooltip>
  );
};

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string,
  to: PropTypes.string,
};

ListItemLink.defaultProps = {
  icon: '',
  primary: '',
  to: '',
};

export default ListItemLink;
