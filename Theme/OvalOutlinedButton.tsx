import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

interface IOvalButton {
  title: string;
  titleColor?: string;
  buttonColor?: string;
  onPress?: () => void;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

export const OvalOutlinedButton: FC<IOvalButton> = ({
  title,
  titleColor,
  buttonColor,
  onPress,
}) => {
  const {buttonStyle, titleStyle, containerStyle} = styles;
  return (
    <Button
      buttonStyle={[buttonStyle, {borderColor: buttonColor}]}
      title={title}
      titleStyle={[titleStyle, {color: titleColor}]}
      type={'outline'}
      onPress={onPress}
      containerStyle={containerStyle}
    />
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 20,
  },
  buttonStyle: {
    height: '100%',
    paddingVertical: 0,
    alignItems: 'center',
    borderRadius: 20,
    width: '90%',
  },
  titleStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 20 : 12,
    textTransform: 'capitalize',
    fontFamily: 'SFProRounded-Bold',
  },
});
