import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signup from './signup';
import usernameChange from './usernameChange';
import getMarkets from './getMarkets';
import getClient from './getClient';
import buy from './buy';
import sell from './sell';

const rootReducer = combineReducers({
  buy,
  sell,
  getMarkets,
  signup,
  getClient,
  username: usernameChange,
  routing: routerReducer
});

export default rootReducer;
