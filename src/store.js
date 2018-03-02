import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from  './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const history = createHistory();

const persistConfig = {
  key: 'root',
  storage,
}

const initialState = {};
const middleware = [
  thunk,
  routerMiddleware(history)
];

const composeEnhancers = typeof window === 'object' &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(rootReducer)
    );
  }

  return {store, persistor};
};
