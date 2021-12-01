import {Dimensions} from 'react-native';
import {StackNavigationProp} from '../SignedApp/constants';

export interface IAccounts {
  navigation: StackNavigationProp;
}

export const SCREEN_WIDTH = Dimensions.get('window').width;
