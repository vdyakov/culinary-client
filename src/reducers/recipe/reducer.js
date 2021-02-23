import Immutable from 'seamless-immutable';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { withLoadable } from '../WithLoadable/reducer';

export const setFetching = createAction('recipes/fetching');
export const setSuccess = createAction('recipes/success');
export const setError = createAction('recipes/error');

const initialState = Immutable({
  recipes: []
});

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    // eslint-disable-next-line max-len
    setRecipes: (state, action) => Immutable.merge({
      ...state,
      recipes: action.payload.map((recipe) => ({
        // eslint-disable-next-line no-underscore-dangle
        id: recipe._id,
        name: recipe.name,
        description: recipe.description,
        recipe: recipe.recipe,
        tags: recipe.tags.map((preferenceType) => ({
          // eslint-disable-next-line no-underscore-dangle
          id: preferenceType._id,
          name: preferenceType.name,
          not_suitable_for_vegetarians: preferenceType.not_suitable_for_vegetarians,
        })),
        not_suitable_for_vegetarians: recipe.not_suitable_for_vegetarians,
      }))
    }),
  },
});

export const {
  setRecipes
} = recipeSlice.actions;

const userWithLoadableReducer = withLoadable({
  fetchingAction: setFetching.type,
  successAction: setSuccess.type,
  errorAction: setError.type,
})(recipeSlice.reducer);

export default userWithLoadableReducer;
