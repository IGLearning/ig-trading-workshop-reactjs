import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from  './reducers';

export const history = createHistory();

const initialState = {};
const middleware = [
  thunk,
  routerMiddleware(history)
];

const composeEnhancers = typeof window === 'object' &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose);

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(rootReducer)
  );
}

export default store;
