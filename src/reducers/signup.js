import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {isLoading: true});
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        signedIn: true
      });
    case SIGNUP_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload
      });
    default:
      return state;
  }
};
