import {
  SELL_SUCCESS,
  SELL_FAILURE,
  SELL_REQUEST
} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case SELL_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case SELL_SUCCESS:
      return Object.assign({}, state, {
        closingPrice: action.payload,
        isLoading: false
      });
    case SELL_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload
      });
    default:
      return state;
  }
}
