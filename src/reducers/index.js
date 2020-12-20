import { combineReducers } from 'redux';

import authReducer from './authReducer';
import categoryReducer from './categoryReducer';

const appReducers = combineReducers({
  authReducer,
  categoryReducer
});

export default appReducers;
