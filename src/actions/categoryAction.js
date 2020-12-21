import { createAction } from 'redux-actions';
import { push } from 'connected-react-router';
import {
  FETCH_CATEGORIES_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  FETCH_CATEGORY_SUCCESS
} from '../constants/actionTypes';

import CategoryApi from '../api/categoryApi';

const fetchCategoriesSuccess = createAction(FETCH_CATEGORIES_SUCCESS);
const createCategoryFailure = createAction(CREATE_CATEGORY_FAILURE);
const fetchCategorySuccess = createAction(FETCH_CATEGORY_SUCCESS);

export function fetchCategories() {
  return dispatch => CategoryApi.index()
    .then(({ data }) => {
      return dispatch(fetchCategoriesSuccess(data));
    });
}

export function requestCategoryCreate(data) {
  return dispatch => CategoryApi.create(data)
    .then(({ data }) => {
      dispatch(createCategoryFailure({}));
      return dispatch(push('/categories'));
    })
    .catch(error => {
      return dispatch(createCategoryFailure(error.response.data));
    });
}

export function fetchCategory(id) {
  return dispatch => CategoryApi.show(id)
    .then(({ data }) => {
      return dispatch(fetchCategorySuccess(data));
    })
    .catch(error => {
      return dispatch(push('/categories'));
    });
}
