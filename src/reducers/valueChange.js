import {VALUE_CHANGE} from '../actions/actionTypes';

export default (state = '', payload) => {
  switch (payload.type) {
    case VALUE_CHANGE:
      return payload.item;
    default:
      return state;
  }
};
