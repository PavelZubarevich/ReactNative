import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Button, IconNode} from 'react-native-elements';

interface IOvalButton {
  title: string;
  titleColor?: string;
  buttonColor?: string;
  icon?: IconNode;
  onPress?: () => void;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

export const OvalSolidButton: FC<IOvalButton> = ({
  title,
  titleColor,
  buttonColor,
  icon,
  onPress,
}) => {
  const {buttonStyle, titleStyle, containerStyle} = styles;
  return (
    <Button
      buttonStyle={[buttonStyle, {backgroundColor: buttonColor}]}
      title={title}
      titleStyle={[titleStyle, {color: titleColor}]}
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
  },
  titleStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 18 : 12,
    textTransform: 'uppercase',
    fontFamily: 'SFProRounded-Bold',
  },
});
