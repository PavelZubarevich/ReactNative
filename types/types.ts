import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type BottomBarParams = {
  Home: undefined;
  Accounts: undefined;
  Giving: undefined;
  Payments: undefined;
  Cards: undefined;
};
export type StackParams = {
  HomeTabs: undefined;
  Checking: {subTitle: string} | undefined;
  Saving: {subTitle: string} | undefined;
};

export type StackProps = NativeStackScreenProps<StackParams>;
export type StackNavigationProp = StackProps['navigation'];

export type CheckingStackProps = NativeStackScreenProps<
  StackParams,
  'Checking'
>;
export type CheckingScreenRouteProp = StackProps['route'];

export type SavingStackProps = NativeStackScreenProps<StackParams, 'Saving'>;
export type SavingScreenRouteProp = StackProps['route'];
