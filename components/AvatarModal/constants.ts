import {Dimensions} from 'react-native';

export interface IModal {
  showModal: boolean;
  modalHandler: () => void;
}

export const SCREEN_WIDTH = Dimensions.get('window').width;
