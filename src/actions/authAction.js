import { createAction } from 'redux-actions';
import {
  REQUEST_AUTH_SUCCESS,
  REQUEST_AUTH_FAILURE
} from '../constants/actionTypes';
import { setToken } from '../helpers/localStorage';

import UserApi from '../api/userApi';

const authSuccess = createAction(REQUEST_AUTH_SUCCESS);
const authFailure = createAction(REQUEST_AUTH_FAILURE);

export function requestLogin(loginData) {
  return dispatch => UserApi.login(loginData)
    .then(({ data }) => {
      setToken('jwtToken', data.meta.jwtToken);
      return dispatch(authSuccess(data));
    })
    .catch(error => {
      return dispatch(authFailure(error.response.data));
    });
}

export function requestSignup(signupData) {
  return dispatch => UserApi.signup(signupData)
    .then(({ data }) => {
      setToken('jwtToken', data.meta.jwtToken);
      return dispatch(authSuccess(data));
    })
    .catch(error => {
      return dispatch(authFailure(error.response.data));
    });
}

export function requestAuth() {
  return dispatch => UserApi.auth()
    .then(({ data }) => {
      setToken('jwtToken', data.meta.jwtToken);
      return dispatch(authSuccess(data));
    })
}
