import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {SearchBar} from 'react-native-elements';
import colors from '../colors/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface ISearchBar {
  placeholder?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
}

export const SearchBarCustom: FC<ISearchBar> = ({
  placeholder,
  disabled,
  secureTextEntry,
}) => {
  const {inputStyle, labelStyle, containerStyle, inputContainerStyle} = styles;
  return (
    <SearchBar
      placeholder={placeholder || ''}
      placeholderTextColor={colors.grey}
      inputStyle={inputStyle}
      labelStyle={labelStyle}
      containerStyle={containerStyle}
      inputContainerStyle={inputContainerStyle}
      secureTextEntry={secureTextEntry}
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
  },
  labelStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 22 : 16,
    color: colors.grey,
  },
  containerStyle: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
  },
});
