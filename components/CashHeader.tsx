import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../colors/colors';

interface IHeader {
  title?: string;
}

export const CashHeader: FC<IHeader> = ({title}) => {
  const {header, titleStyle, amountMainStyle, amountSubStyle, subTitleStyle} =
    styles;
  return (
    <View style={header}>
      {title && <Text style={titleStyle}>{title}</Text>}
      <Text style={amountMainStyle}>
        $7,000.<Text style={amountSubStyle}>80</Text>
      </Text>

      <Text style={subTitleStyle}>Total Available cash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  titleStyle: {
    fontFamily: 'SFProRounded-Bold',
    color: colors.darkGrey,
    textTransform: 'capitalize',
    fontSize: 19,
    lineHeight: 19,
    marginBottom: 15,
  },
  amountMainStyle: {
    fontFamily: 'SFProRounded-Regular',
    fontSize: 28,
    lineHeight: 28,
    color: colors.darkGrey,
  },
  amountSubStyle: {
    fontFamily: 'SFProRounded-Regular',
    color: colors.darkGrey,
    fontSize: 21,
    lineHeight: 27,
  },
  subTitleStyle: {
    fontFamily: 'SFProRounded-Light',
    color: colors.grey,
    fontSize: 16,
  },
});
