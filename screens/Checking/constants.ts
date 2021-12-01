import {Dimensions} from 'react-native';
import {StackParams} from '../SignedApp/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type CheckingStackProps = NativeStackScreenProps<
  StackParams,
  'Checking'
>;
export type CheckingScreenRouteProp = CheckingStackProps['route'];

export interface IChecking {
  route: CheckingScreenRouteProp;
}

type data = {
  title: string;
  subTitle: string;
  special?: string;
};

export interface ISectionList {
  title: string;
  subTitle: string;
  special?: string;
}
interface IData {
  title: string;
  data: Array<data>;
}

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const DATA: Array<IData> = [
  {
    title: 'Jul 11',
    data: [
      {title: 'Pizza', subTitle: 'subPizza'},
      {title: 'Burger', subTitle: 'subBurger'},
      {title: 'Risotto', subTitle: 'subRisotto', special: 'deposit'},
    ],
  },
  {
    title: 'Jul 10',
    data: [
      {title: 'Pizza11', subTitle: 'subPizza11', special: 'special'},
      {title: 'Burger11', subTitle: 'subBurger11'},
    ],
  },
  {
    title: 'Jul 5',
    data: [
      {title: 'Pizza00', subTitle: 'subPizza00'},
      {title: 'Burger00', subTitle: 'subBurger00'},
      {title: 'Risotto00', subTitle: 'subRisotto00'},
    ],
  },
];
