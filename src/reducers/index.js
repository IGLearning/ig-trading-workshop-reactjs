import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signup from './signup';
import usernameChange from './usernameChange';
import getMarkets from './getMarkets';

const rootReducer = combineReducers({
  getMarkets,
  signup,
  username: usernameChange,
  routing: routerReducer
});

export default rootReducer;
