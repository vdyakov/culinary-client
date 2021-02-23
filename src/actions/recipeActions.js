// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import requestService from '../services/request';
import {
  // eslint-disable-next-line import/named
  setRecipes,
  setError,
  setFetching,
  setSuccess,
} from '../reducers/recipe/reducer';

// eslint-disable-next-line import/prefer-default-export
export const getList = (token) => async (dispatch) => {
  dispatch(setFetching());

  const response = await requestService.recipeList(token);
  const { models, error } = response;

  if (error) {
    dispatch(setError(error));

    return;
  }

  dispatch(setRecipes(models));
  dispatch(setSuccess('Модели успешно загружены'));
};
