import {Dimensions} from 'react-native';
import {StackNavigationProp} from '../SignedApp/constants';

export interface IAccounts {
  navigation: StackNavigationProp;
}

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const iconSend = require('../../Assets/Images/circleButtonSend.png');
export const iconPay = require('../../Assets/Images/circleButtonPay.png');
export const iconChecking = require('../../Assets/Images/circleButtonChecking.png');
