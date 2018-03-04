import {
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILURE,
  GET_CLIENT_REQUEST
} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_CLIENT_REQUEST:
      return Object.assign({}, state, {
        readyToRenderClient: false
      });
    case GET_CLIENT_SUCCESS:
      return Object.assign({}, state, {
        readyToRenderClient: true,
        client: action.payload
      });
    case GET_CLIENT_FAILURE:
      return Object.assign({}, state, {
        readyToRenderClient: false,
        errorMessage: action.payload
      });
    default:
      return state;
  }
}
