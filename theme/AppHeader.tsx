import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Header} from 'react-native-elements';
import colors from '../colors/colors';
import UserAvatar from '../components/UserAvatar';

type HeaderSubComponent = React.ReactElement<{}>;

interface IHeader {
  leftComponent: HeaderSubComponent;
  centerComponent: HeaderSubComponent;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

export const AppHeader: FC<IHeader> = ({leftComponent, centerComponent}) => {
  const {header} = styles;
  return (
    <Header
      leftComponent={leftComponent}
      centerComponent={centerComponent}
      rightComponent={<UserAvatar />}
      containerStyle={header}
    />
  );
};
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink,
    height: SCREEN_WIDTH > 576 ? 110 : SCREEN_WIDTH > 386 ? 100 : 85,
  },
});
