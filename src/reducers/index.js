import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import authReducer from './authReducer';

const appReducers = combineReducers({
  authReducer,
  loginReducer
});

export default appReducers;
