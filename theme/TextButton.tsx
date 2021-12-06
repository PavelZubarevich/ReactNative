import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

interface ITextButton {
  title: string;
  titleColor?: string;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

export const TextButton: FC<ITextButton> = ({title, titleColor}) => {
  const {buttonStyle, titleStyle} = styles;
  return (
    <Button
      buttonStyle={buttonStyle}
      title={title}
      titleStyle={[titleStyle, {color: titleColor}]}
      type="clear"
    />
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 0,
  },
  titleStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 18 : 12,
    textTransform: 'uppercase',
    fontFamily: 'SFProRounded-Bold',
  },
});
