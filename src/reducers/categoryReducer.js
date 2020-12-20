import {
  REQUEST_CATEGORIES_SUCCESS
} from '../constants/actionTypes';

const categoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.data
      }
    default:
      return state
  }
}

export default categoryReducer;
