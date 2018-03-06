import {
  TRADE_SUCCESS,
  TRADE_FAILURE,
  TRADE_REQUEST
} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case TRADE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case TRADE_SUCCESS:
      return {
        confirmation: action.payload,
        isLoading: false
      };
    case TRADE_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload
      });
    default:
      return state;
  }
}
