import {USERNAME_CHANGE} from '../constants/actionTypes';

export default (state = '', payload) => {
  switch (payload.type) {
    case USERNAME_CHANGE:
      return payload.item;
    default:
      return state;
  }
};
