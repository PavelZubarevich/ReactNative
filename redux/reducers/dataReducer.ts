import {Image} from 'react-native';
import {actionsTypes, dataState, dataActions} from '../types/data';

const initialState: dataState = {
  fullName: 'Danny',
  birth: 'march 21, 1996',
  avatarSource: Image.resolveAssetSource(
    require('../../Assets/Images/oval.png'),
  ).uri,
};

export function dataReducer(state = initialState, action: dataActions) {
  switch (action.type) {
    case actionsTypes.CHANGE_NAME:
      return {...state, fullName: action.fullName};
    case actionsTypes.CHANGE_BIRTH:
      return {...state, birth: action.birth};
    case actionsTypes.CHANGE_AVATAR:
      return {...state, avatarSource: action.avatar};
    default:
      return state;
  }
}
