import { REQUEST_LOGIN_FAILURE } from '../constants/actionTypes';

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN_FAILURE:
      return {
        ...state,
        errors: action.payload.errors
      };
    default:
      return state;
  }
};

export default loginReducer;
