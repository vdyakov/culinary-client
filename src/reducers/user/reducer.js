import Immutable from 'seamless-immutable';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { withLoadable } from '../WithLoadable/reducer';

export const setFetching = createAction('user/fetching');
export const setSuccess = createAction('user/success');
export const setError = createAction('user/error');

const initialState = Immutable({
  token: '',
});

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => Immutable.merge({ ...state, token: action.payload }),
    setTokenFromStorage: (state, action) => Immutable.merge({ ...state, token: action.payload }),
    logoutUser: (state) => Immutable.merge({ ...state, ...initialState }),
  },
});

export const {
  loginUser, setTokenFromStorage, logoutUser
} = user.actions;

const userWithLoadableReducer = withLoadable({
  fetchingAction: setFetching.type,
  successAction: setSuccess.type,
  errorAction: setError.type,
})(user.reducer);

export default userWithLoadableReducer;
