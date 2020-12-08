import {
  REQUEST_AUTH_SUCCESS,
  REQUEST_AUTH_FAILURE
} from '../constants/actionTypes';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_AUTH_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.data
      }
    case REQUEST_AUTH_FAILURE:
      return {
        ...state,
        errors: action.payload.errors
      };
    default:
      return state
  }
}

export default authReducer;
