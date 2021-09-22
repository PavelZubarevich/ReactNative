import {ComponentType} from 'react';
import {HomeTabs, Checking, Saving} from '../';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParams = {
  SignIn: undefined;
  HomeTabs: undefined;
  Checking: {subTitle: string} | undefined;
  Saving: {subTitle: string} | undefined;
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
];

export const Stack = createNativeStackNavigator<StackParams>();
