import {StackParams} from '../SignedApp/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type CheckingStackProps = NativeStackScreenProps<
  StackParams,
  'Checking'
>;
export type CheckingScreenRouteProp = CheckingStackProps['route'];
