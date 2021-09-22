import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Button, IconNode} from 'react-native-elements';

interface IOvalButton {
  title: string;
  titleStyle?: object;
  buttonColor?: string;
  icon?: IconNode;
  onPress?: () => void;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

export const OvalSolidButton: FC<IOvalButton> = ({
  title,
  titleStyle,
  buttonColor,
  icon,
  onPress,
}) => {
  const {buttonStyle, defaultTitleStyle, containerStyle} = styles;
  return (
    <Button
      buttonStyle={[buttonStyle, {backgroundColor: buttonColor}]}
      title={title}
      titleStyle={[defaultTitleStyle, titleStyle]}
      type={'solid'}
      onPress={onPress}
      containerStyle={containerStyle}
      icon={icon}
    />
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 20,
  },
  buttonStyle: {
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
