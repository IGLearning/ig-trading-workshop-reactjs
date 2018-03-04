import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signup from './signup';
import usernameChange from './usernameChange';
import getMarkets from './getMarkets';
import getClient from './getClient';

const rootReducer = combineReducers({
  getMarkets,
  signup,
  getClient,
  username: usernameChange,
  routing: routerReducer
});

export default rootReducer;
