import {StackParams} from '../SignedApp/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SavingStackProps = NativeStackScreenProps<StackParams, 'Saving'>;
export type SavingScreenRouteProp = SavingStackProps['route'];

export interface ISaving {
  route: SavingScreenRouteProp;
}

export interface ICardProps {
  title: string;
  date: string;
  amount: string;
}

export const DATA: Array<ICardProps> = [
  {
    title: 'Deposit',
    date: 'Jul 11',
    amount: '2,000.00',
  },
  {
    title: 'Deposit',
    date: 'Jul 11',
    amount: '2,000.00',
  },
  {
    title: 'Deposit',
    date: 'Jul 11',
    amount: '2,000.00',
  },

  {
    title: 'Deposit',
    date: 'Jul 11',
    amount: '2,000.00',
  },
  {
    title: 'Deposit',
    date: 'Jul 11',
    amount: '2,000.00',
  },
  {
    title: 'Deposit',
    date: 'Jul 11',
    amount: '2,000.00',
  },
];
