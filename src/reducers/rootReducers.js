// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-named-as-default
import user from './user/reducer';
import preferenceTypes from './PreferenceType/reducer';
import recipes from './recipe/reducer';

export default combineReducers({
  user,
  preferenceTypes,
  recipes,
});
