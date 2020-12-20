import {
  REQUEST_CATEGORIES_SUCCESS,
  REQUEST_CATEGORIES_FAILURE
} from '../constants/actionTypes';

const categoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.data
      }
    case REQUEST_CATEGORIES_FAILURE:
      return {
        ...state,
        errors: action.payload.errors
      };
    default:
      return state
  }
}

export default categoryReducer;
