import {USERNAME_CHANGE} from '../constants/actions';

export const usernameChange = (item) => {
  return {
    type: USERNAME_CHANGE,
    item
  };
};
