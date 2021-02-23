import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../actions/authActions';
import AuthForm from '../../components/AuthForm/AuthForm';

export default function Auth(props) {
  const token = useSelector((state) => state.user.token);
  const fetching = useSelector((state) => state.user.fetching);
  const dispatch = useDispatch();

  const onClick = (data) => {
    dispatch(loginAction(data));
  };

  useEffect(() => {
    if (token) {
      // eslint-disable-next-line react/prop-types
      props.history.push('/home');
    }
  });

  return (
    <>
      <AuthForm clickHandler={onClick} fetching={fetching} />
    </>
  );
}
