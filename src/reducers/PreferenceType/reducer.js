import Immutable from 'seamless-immutable';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { withLoadable } from '../WithLoadable/reducer';

export const setFetching = createAction('preferenceTypes/fetching');
export const setSuccess = createAction('preferenceTypes/success');
export const setError = createAction('preferenceTypes/error');

const initialState = Immutable({
  preferenceTypes: []
});

export const PreferenceType = createSlice({
  name: 'preferenceTypes',
  initialState,
  reducers: {
    // eslint-disable-next-line max-len
    setPreferenceTypes: (state, action) => Immutable.merge({
      ...state,
      preferenceTypes: action.payload.map((preferenceType) => ({
        // eslint-disable-next-line no-underscore-dangle
        id: preferenceType._id,
        name: preferenceType.name,
        not_suitable_for_vegetarians: preferenceType.not_suitable_for_vegetarians,
      }))
    }),
  },
});

export const {
  setPreferenceTypes
} = PreferenceType.actions;

const userWithLoadableReducer = withLoadable({
  fetchingAction: setFetching.type,
  successAction: setSuccess.type,
  errorAction: setError.type,
})(PreferenceType.reducer);

export default userWithLoadableReducer;
