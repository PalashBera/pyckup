import { REQUEST_LOGIN_SUCCESS } from '../constants/actionTypes';

const authReducer = (state = { currentUser: null }, action) => {
  switch (action.type) {
    case REQUEST_LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.data
      }
    default:
      return state
  }
}

export default authReducer;
