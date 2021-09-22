import {ICardProps} from './types';

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
