import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type BottomBarParams = {
  Home: undefined;
  Accounts: undefined;
  Giving: undefined;
  Payments: undefined;
  Cards: undefined;
};
export type StackParams = {
  SignIn: undefined;
  HomeTabs: undefined;
  Checking: {subTitle: string} | undefined;
  Saving: {subTitle: string} | undefined;
};

export type SignInStackProps = NativeStackScreenProps<StackParams, 'SignIn'>;
export type SignInScreenNavigationProp = SignInStackProps['navigation'];

export type HomeStackProps = NativeStackScreenProps<StackParams, 'HomeTabs'>;
export type HomeScreenNavigationProp = HomeStackProps['navigation'];

export type CheckingStackProps = NativeStackScreenProps<
  StackParams,
  'Checking'
>;
export type CheckingScreenRouteProp = HomeStackProps['route'];

export type SavingStackProps = NativeStackScreenProps<StackParams, 'Saving'>;
export type SavingScreenRouteProp = HomeStackProps['route'];
