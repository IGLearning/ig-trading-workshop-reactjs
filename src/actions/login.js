import {LOGIN} from './actionTypes';

export const login = (item) => {
  return {
    type: LOGIN,
    item
  };
};
