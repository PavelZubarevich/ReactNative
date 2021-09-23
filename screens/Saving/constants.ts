import {StackParams} from '../SignedApp/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SavingStackProps = NativeStackScreenProps<StackParams, 'Saving'>;
export type SavingScreenRouteProp = SavingStackProps['route'];
