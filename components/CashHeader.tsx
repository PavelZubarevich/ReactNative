import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Button, Card} from 'react-native-elements';
import colors from '../colors/colors';
import {BurgerBTN, Title, UserAvatar} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';


interface IHeader {
  title: string;
  amount: number;
}

export const CashHeader: FC<IHeader> = ({title, amount}) => {
  const {header, titleStyle, amountStyle, subTitleStyle} = styles;
  return (
    <View style={header}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={amountStyle}>${amount}</Text>
      <Text style={subTitleStyle}>Total Available cash</Text>
      <Icon name="call" size={30} color="#900" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  titleStyle: {
    fontFamily: 'SFProRounded-Regular',
    fontSize: 18,
    textTransform: 'capitalize',
    color: colors.darckGrey,
    marginBottom: 10,
  },
  amountStyle: {
    fontFamily: 'SFProRounded-Regular',
    fontSize: 26,
    color: colors.darckGrey,
  },
  subTitleStyle: {
    fontFamily: 'SFProRounded-Light',
    fontSize: 14,
    color: colors.grey,
  },
});
