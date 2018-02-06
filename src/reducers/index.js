import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import valueChange from './valueChange';

const rootReducer = combineReducers({
  login,
  username: valueChange,
  routing: routerReducer
});

export default rootReducer;
