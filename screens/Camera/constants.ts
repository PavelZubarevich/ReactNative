import {StackParams} from '../SignedApp/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type CameraStackProps = NativeStackScreenProps<StackParams, 'Camera'>;
export type CameraScreenRouteProp = CameraStackProps['route'];
export type CameraScreenNavigationProp = CameraStackProps['navigation'];

export interface ICamera {
  route: CameraScreenRouteProp;
  navigation: CameraScreenNavigationProp;
}
