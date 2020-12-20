import { createAction } from 'redux-actions';
import { push } from 'connected-react-router';
import {
  REQUEST_CATEGORIES_SUCCESS,
  REQUEST_CATEGORIES_FAILURE
} from '../constants/actionTypes';

import CategoryApi from '../api/categoryApi';

const categoriesSuccess = createAction(REQUEST_CATEGORIES_SUCCESS);
const categoriesFailure = createAction(REQUEST_CATEGORIES_FAILURE);

export function requestCategories() {
  return dispatch => CategoryApi.index()
    .then(({ data }) => {
      return dispatch(categoriesSuccess(data));
    });
}

export function requestCategoryCreate(data) {
  return dispatch => CategoryApi.create(data)
    .then(({ data }) => {
      dispatch(categoriesFailure({}));
      return dispatch(push('/categories'));
    })
    .catch(error => {
      return dispatch(categoriesFailure(error.response.data));
    });
}
