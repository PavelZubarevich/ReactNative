import {actionsTypes} from '../types';

export const logOut = () => {
  return {type: actionsTypes.LOGOUT};
};
export const logIn = jwt => {
  return {type: actionsTypes.LOGIN, jwt};
};
export const logInErr = () => {
  return {type: actionsTypes.LOGIN_ERR};
};
export const logInErrClear = () => {
  return {type: actionsTypes.LOGIN_ERR_CLEAR};
};
