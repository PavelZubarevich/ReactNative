import React, {FC} from 'react';
import {StyleSheet, Dimensions, ViewStyle, TextStyle} from 'react-native';
import {Button} from 'react-native-elements';

interface IOvalButton {
  title: string;
  titleStyle?: TextStyle;
  buttonColor?: string;
  containerStyle?: ViewStyle;
  icon?: any;
  onPress?: () => void;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

export const OvalSolidButton: FC<IOvalButton> = ({
  title,
  titleStyle,
  buttonColor,
  containerStyle,
  icon,
  onPress,
}) => {
  const {defaultButtonStyle, defaultTitleStyle, defaultContainerStyle} = styles;
  return (
    <Button
      buttonStyle={[defaultButtonStyle, {backgroundColor: buttonColor}]}
      title={title}
      titleStyle={[defaultTitleStyle, titleStyle]}
      type={'solid'}
      onPress={onPress}
      containerStyle={[defaultContainerStyle, containerStyle]}
      icon={icon}
    />
  );
};
const styles = StyleSheet.create({
  defaultContainerStyle: {
    borderRadius: 20,
  },
  defaultButtonStyle: {
    borderRadius: 20,
    height: SCREEN_WIDTH > 576 ? 50 : 40,
    justifyContent: 'center',
    paddingVertical: 0,
  },
  defaultTitleStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 18 : 12,
    textTransform: 'uppercase',
    fontFamily: 'SFProRounded-Bold',
  },
});
