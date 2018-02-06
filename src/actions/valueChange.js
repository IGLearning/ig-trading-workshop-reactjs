import {VALUE_CHANGE} from './actionTypes';

export const valueChange = (item) => {
  return {
    type: VALUE_CHANGE,
    item
  };
};
