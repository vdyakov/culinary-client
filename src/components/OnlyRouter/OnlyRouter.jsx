import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function OnlyRoute(props) {
  const token = useSelector((state) => state.user.token);

  // eslint-disable-next-line react/prop-types,react/destructuring-assignment
  if (token || props.location.pathname === '/login') {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...props} />;
  }

  return <Redirect to="/login" />;
}
