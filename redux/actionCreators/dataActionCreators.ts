import {actionsTypes} from '../types/data';

export const changeName = (fullName: string) => {
  return {type: actionsTypes.CHANGE_NAME, fullName};
};
export const changeBirth = (birth: string) => {
  return {type: actionsTypes.CHANGE_BIRTH, birth};
};
export const changeAvatar = (avatar: string) => {
  return {type: actionsTypes.CHANGE_AVATAR, avatar};
};
