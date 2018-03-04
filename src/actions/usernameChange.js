import {USERNAME_CHANGE} from '../constants/actionTypes';

export const usernameChange = (item) => {
  return {
    type: USERNAME_CHANGE,
    item
  };
};
