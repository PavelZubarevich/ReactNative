import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {IIconButton} from './constants';
import colors from '../../colors/colors';

export const IconButton: FC<IIconButton> = ({text, img}) => {
  const {iconButton, buttonImage, textStyle} = styles;
  return (
    <View>
      <TouchableOpacity style={iconButton}>
        <Image source={img} style={buttonImage} />
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  iconButton: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 70,
    height: 70,
  },
  textStyle: {
    color: colors.grey,
  },
});
