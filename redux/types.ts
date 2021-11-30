export enum actionsTypes {
  LOGIN = 'LOG_IN',
  LOGOUT = 'LOG_OUT',
  LOGIN_ERR = 'LOG_IN_ERR',
  LOGIN_ERR_CLEAR = 'LOG_IN_ERR_CLEAR',
}

interface ILogIn {
  type: actionsTypes.LOGIN;
  jwt: string;
}
interface ILogOut {
  type: actionsTypes.LOGOUT;
}
interface ILogInErr {
  type: actionsTypes.LOGIN_ERR;
}
interface ILogInErrClear {
  type: actionsTypes.LOGIN_ERR_CLEAR;
}

export type actions = ILogIn | ILogOut | ILogInErr | ILogInErrClear;

export interface authState {
  jwt: string;
  error: string;
}

export interface connectAuthState {
  auth: {
    jwt: string;
  };
}
export interface connectErrState {
  auth: {
    error: string;
  };
}
