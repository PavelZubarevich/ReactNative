import {ComponentType} from 'react';
import {ImageSourcePropType, Platform} from 'react-native';
import {Accounts, Giving, Payments, Cards} from '../';
import Home from '../Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type BottomBarParams = {
  Home: undefined;
  Accounts: undefined;
  Giving: undefined;
  Payments: undefined;
  Cards: undefined;
};

interface IScreen {
  name: keyof BottomBarParams;
  tabImage: ImageSourcePropType;
  component: ComponentType<any>;
}

export const screens: Array<IScreen> = [
  {
    name: 'Home',
    tabImage: require('../../Assets/Images/home.png'),
    component: Home,
  },
  {
    name: 'Accounts',
    tabImage: require('../../Assets/Images/accounts.png'),
    component: Accounts,
  },
  {
    name: 'Giving',
    tabImage: require('../../Assets/Images/giving.png'),
    component: Giving,
  },
  {
    name: 'Payments',
    tabImage: require('../../Assets/Images/payment.png'),
    component: Payments,
  },
  {
    name: 'Cards',
    tabImage: require('../../Assets/Images/cards.png'),
    component: Cards,
  },
];

export const Tab = createBottomTabNavigator<BottomBarParams>();
export const PLATFORM_IOS = Platform.OS === 'ios';
