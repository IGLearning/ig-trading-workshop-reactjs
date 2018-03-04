import {
  BUY_SUCCESS,
  BUY_FAILURE,
  BUY_REQUEST
} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case BUY_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case BUY_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false
      });
    case BUY_FAILURE:
      return Object.assign({}, state, {
        isLoading: false, 
        errorMessage: action.payload
      });
    default:
      return state;
  }
}
