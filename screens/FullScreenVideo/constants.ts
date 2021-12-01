import {StackParams} from '../SignedApp/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type videoStackProps = NativeStackScreenProps<
  StackParams,
  'FullScreenVideo'
>;
export type videoScreenRouteProp = videoStackProps['route'];
export type videoScreenNavigationProp = videoStackProps['navigation'];
