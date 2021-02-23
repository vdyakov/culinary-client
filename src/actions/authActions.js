// eslint-disable-next-line no-unused-vars
import React from 'react';
import requestService from '../services/request';
import {
  loginUser,
  logoutUser,
  setError,
  setFetching,
  setSuccess,
  setTokenFromStorage,
} from '../reducers/user/reducer';

export const loginAction = (data) => async (dispatch) => {
  dispatch(setFetching());

  const response = await requestService.auth(data);
  const { token, error } = response;

  if (error) {
    dispatch(setError(error));

    return;
  }

  window.localStorage.setItem('token', token);
  dispatch(loginUser(token));
  dispatch(setSuccess('Вы успешно авторизованы'));
};

export const logoutAction = () => async (dispatch) => {
  window.localStorage.removeItem('token');
  dispatch(logoutUser());
};

export const setTokenFromLocalStorage = () => async (dispatch) => {
  const token = window.localStorage.getItem('token');

  if (token) {
    dispatch(setTokenFromStorage(token));
  } else {
    dispatch(logoutUser());
  }
};
