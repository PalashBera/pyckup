import { createAction } from 'redux-actions';
import {
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE
} from '../constants/actionTypes';
import { setToken } from '../helpers/localStorage';

import UserApi from '../api/userApi';

const loginSuccess = createAction(REQUEST_LOGIN_SUCCESS);
const loginFailure = createAction(REQUEST_LOGIN_FAILURE);

export function requestLogin(loginData) {
  return dispatch => UserApi.login(loginData)
    .then(({ data }) => {
      setToken('jwtToken', data.meta.jwtToken);
      return dispatch(loginSuccess(data));
    })
    .catch(error => {
      return dispatch(loginFailure(error.response.data));
    });
}
