import { createAction } from 'redux-actions';
import {
  REQUEST_CATEGORIES_SUCCESS
} from '../constants/actionTypes';

import CategoryApi from '../api/categoryApi';

const categoriesSuccess = createAction(REQUEST_CATEGORIES_SUCCESS);

export function requestCategories() {
  return dispatch => CategoryApi.index()
    .then(({ data }) => {
      return dispatch(categoriesSuccess(data));
    });
}
