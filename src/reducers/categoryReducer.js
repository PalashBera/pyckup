import {
  FETCH_CATEGORIES_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  FETCH_CATEGORY_SUCCESS
} from '../constants/actionTypes';

const categoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.data
      }
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload.data
      }
    case CREATE_CATEGORY_FAILURE:
      return {
        ...state,
        errors: action.payload.errors
      };
    default:
      return state
  }
}

export default categoryReducer;
