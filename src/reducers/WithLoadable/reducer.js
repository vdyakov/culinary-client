import Immutable from 'seamless-immutable';

export const initialState = Immutable({
  error: null,
  fetching: false,
  success: false
});

const fetchingReducer = (state) => Immutable.merge({
  ...state,
  error: null,
  fetching: true,
  success: false
});

const successReducer = (state) => Immutable.merge({
  ...state,
  error: null,
  fetching: false,
  success: true
});

const errorReducer = (state, action) => Immutable.merge({
  ...state,
  error: action.error,
  fetching: false,
  success: false
});

export const noopReducer = (state) => state;

export const withLoadable = (actionTypes) => {
  const actionReducerMap = {
    [actionTypes.fetchingAction]: fetchingReducer,
    [actionTypes.successAction]: successReducer,
    [actionTypes.errorAction]: errorReducer
  };

  return (baseReducer) => (state, action) => {
    const reducerFunction = actionReducerMap[action.type] || noopReducer;
    const newState = reducerFunction(state, action);
    return baseReducer(newState, action);
  };
};
