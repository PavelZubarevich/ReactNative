import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Input} from 'react-native-elements';
import colors from '../colors/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface ICustomInput {
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

export const OvalTextInput: FC<ICustomInput> = ({
  label,
  placeholder,
  value,
  disabled,
  secureTextEntry,
  onChangeText,
}) => {
  const {inputStyle, labelStyle, containerStyle, inputContainerStyle} = styles;
  return (
    <Input
      placeholder={placeholder || ''}
      placeholderTextColor={colors.grey}
      label={label || ''}
      inputStyle={inputStyle}
      labelStyle={labelStyle}
      containerStyle={containerStyle}
      inputContainerStyle={inputContainerStyle}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      disabled={disabled}
    />
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 20 : 14,
    paddingVertical: SCREEN_WIDTH > 576 ? 15 : 0,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: colors.lightGrey,
    height: 35,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  labelStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 22 : 16,
    color: colors.grey,
  },
  containerStyle: {
    paddingHorizontal: 0,
  },
});
