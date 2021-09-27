import {Dimensions} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {
  changeName,
  changeBirth,
  changeAvatar,
} from '../../redux/actionCreators/dataActionCreators';
import {connectDataState} from '../../redux/types/data';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export enum months {
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
}

const mapState = (state: connectDataState) => ({
  name: state.data.fullName,
  birth: state.data.birth,
  avatar: state.data.avatarSource,
});
const mapDispatch = {
  changeFullName: (name: string) => changeName(name),
  changeBirth: (birth: string) => changeBirth(birth),
  changeAvatar: (avatar: string) => changeAvatar(avatar),
};

export const connector = connect(mapState, mapDispatch);

export type Props = ConnectedProps<typeof connector>;
