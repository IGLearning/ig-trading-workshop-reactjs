import {LOGIN} from '../actions/actionTypes';

export default (state = [], payload) => {
  switch (payload.type) {
    case LOGIN:
      return [...state, payload.item];
    default:
      return state;
  }
};
