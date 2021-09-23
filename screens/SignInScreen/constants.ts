import {Dimensions} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {logIn, logInErr} from '../../redux/actionCreators/actionCreators';
import {connectErrState} from '../../redux/types';

export const SCREEN_WIDTH = Dimensions.get('window').width;

const mapState = (state: connectErrState) => ({authErr: state.auth.error});
const mapDispatch = {
  login: (token: string) => logIn(token),
  loginErr: () => logInErr(),
};

export const connector = connect(mapState, mapDispatch);

export type Props = ConnectedProps<typeof connector>;
