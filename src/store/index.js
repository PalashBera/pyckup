import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import reducer from '../reducers';

export const history = createBrowserHistory()

export default function store(preloadedState) {
  const newStore = createStore(
    reducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      ),
    ),
  )

  return newStore;
}
