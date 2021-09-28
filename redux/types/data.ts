export enum actionsTypes {
  CHANGE_NAME = 'CHANGE_NAME',
  CHANGE_BIRTH = 'CHANGE_BIRTH',
  CHANGE_AVATAR = 'CHANGE_AVATAR',
}

export interface dataState {
  fullName: string;
  birth: string;
  avatarSource: string;
}

interface IChangeName {
  type: actionsTypes.CHANGE_NAME;
  fullName: string;
}
interface IChangeBirth {
  type: actionsTypes.CHANGE_BIRTH;
  birth: string;
}
interface IChangeAvatar {
  type: actionsTypes.CHANGE_AVATAR;
  avatar: string;
}

export type dataActions = IChangeName | IChangeBirth | IChangeAvatar;

export interface connectDataState {
  data: {
    fullName: string;
    birth: string;
    avatarSource: string;
  };
}
