import {Dimensions} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {connectDataState} from '../../redux/types/data';

export enum months {
  'Jan',
  'Feb',
  'Mar',
  'Apr ',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
}

export interface ICardProps {
  id: string;
  image: string;
  video?: string;
}

const mapState = (state: connectDataState) => ({
  name: state.data.fullName,
});

export const connector = connect(mapState);
export type Props = ConnectedProps<typeof connector>;

export const {height: windowHeight, width: SCREEN_WIDTH} =
  Dimensions.get('window');

export const boxHeight = windowHeight / 2;

export const data: Array<ICardProps> = [
  {
    id: '1',
    image: require('../../Assets/Images/rectangle2.png'),
  },
  {
    id: '2',
    image: require('../../Assets/Images/rectangle.png'),
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: '3',
    image: require('../../Assets/Images/rectangle2.png'),
  },
];
