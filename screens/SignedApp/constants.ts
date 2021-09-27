import {ComponentType} from 'react';
import {HomeTabs, Checking, Saving, FullScreenVideo} from '../';
import Profile from '../Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParams = {
  HomeTabs: undefined;
  Checking: {subTitle: string} | undefined;
  Saving: {subTitle: string} | undefined;
  FullScreenVideo: {videoSource: string} | undefined;
  Profile: undefined;
};

export type StackProps = NativeStackScreenProps<StackParams>;
export type StackNavigationProp = StackProps['navigation'];

interface IScreen {
  name: keyof StackParams;
  component: ComponentType<any>;
}

export const screens: Array<IScreen> = [
  {
    name: 'HomeTabs',
    component: HomeTabs,
  },
  {
    name: 'Checking',
    component: Checking,
  },
  {
    name: 'Saving',
    component: Saving,
  },
  {
    name: 'FullScreenVideo',
    component: FullScreenVideo,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];

export const Stack = createNativeStackNavigator<StackParams>();
