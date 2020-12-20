import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './authReducer';
import categoryReducer from './categoryReducer';

const appReducers = (history) => combineReducers({
  router: connectRouter(history),
  authReducer,
  categoryReducer
});

export default appReducers;
