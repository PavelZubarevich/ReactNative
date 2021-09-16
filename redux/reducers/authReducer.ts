import {actionsTypes, authState, actions} from '../types';

const initialState: authState = {
  jwt: '',
  error: '',
};

export function authReducer(state = initialState, action: actions) {
  switch (action.type) {
    case actionsTypes.LOGIN:
      return {jwt: action.jwt};
    case actionsTypes.LOGOUT:
      return {jwt: ''};
    case actionsTypes.LOGIN_ERR:
      return {error: 'Email or password is invalid'};
    case actionsTypes.LOGIN_ERR_CLEAR:
      return {error: ''};
    default:
      return state;
  }
}
