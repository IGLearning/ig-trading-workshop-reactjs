import {
  GET_OPEN_POSITIONS_FAILURE,
  GET_OPEN_POSITIONS_SUCCESS,
  GET_OPEN_POSITIONS_REQUEST
} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_OPEN_POSITIONS_REQUEST:
      return {
        isLoading: true
      };
    case GET_OPEN_POSITIONS_SUCCESS:
      return {
        isLoading: false,
        positions: action.payload,
        errorMessage: undefined
      };
    case GET_OPEN_POSITIONS_FAILURE:
      return {
        isLoading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
