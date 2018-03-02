import {LOGOUT} from '../constants/actions';

export default (state, payload) => {
  switch (payload.type) {
    case LOGOUT: {
      return Object.assign({}. state, {
        username: '',
        signedIn: false
      });
    }
    default:
      return state;
  }
}
