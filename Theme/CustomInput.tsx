import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Input} from 'react-native-elements';
import colors from '../colors/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface ICustomInput {
  label?: string;
  placeholder?: string;
  value?: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

export const CustomInput: FC<ICustomInput> = ({
  label,
  placeholder,
  value,
  secureTextEntry,
  onChangeText,
}) => {
  const {inputStyle, labelStyle, containerStyle, inputContainerStyle} = styles;
  return (
    <Input
      placeholder={placeholder || ''}
      placeholderTextColor={colors.lightGrey}
      label={label || ''}
      inputStyle={inputStyle}
      labelStyle={labelStyle}
      containerStyle={containerStyle}
      inputContainerStyle={inputContainerStyle}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 20 : 14,
    paddingVertical: SCREEN_WIDTH > 576 ? 15 : 0,
  },
  inputContainerStyle: {
    borderBottomColor: colors.lightGrey,
  },
  labelStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 22 : 16,
  },
  containerStyle: {
    paddingHorizontal: 0,
  },
});
