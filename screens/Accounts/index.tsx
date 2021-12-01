import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../colors/colors';
import {
  CashHeader,
  GoBackBTN,
  Title,
  IconButton,
  CashCardItem,
} from '../../components';
import {AppHeader} from '../../theme';
import {CardTypes} from '../../components/CashCardItem/constants';
import {
  IAccounts,
  SCREEN_WIDTH,
  iconSend,
  iconPay,
  iconChecking,
} from './constants';

export const Accounts: FC<IAccounts> = ({navigation}) => {
  const {main, actionButtons, cards, card} = styles;
  return (
    <View>
      <AppHeader
        leftComponent={<GoBackBTN />}
        centerComponent={<Title title={'Accounts'} />}
      />
      <View style={main}>
        <CashHeader />
        <View style={actionButtons}>
          <IconButton img={iconSend} text="Send" />
          <IconButton img={iconPay} text="Pay" />
          <IconButton img={iconChecking} text="Transfer" />
        </View>

        <View style={cards}>
          <View style={card}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Checking', {subTitle: 'subTitle'})
              }>
              <CashCardItem
                title="Checking"
                subTitle="Main account (...0353)"
                amount="1,500.20"
                type={CardTypes.ACCOUNTS}
              />
            </TouchableOpacity>
          </View>
          <View style={card}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Saving', {subTitle: 'subTitle'})
              }>
              <CashCardItem
                title="Savings"
                subTitle="Buy a house (...4044)"
                amount="5,000.20"
                info="Savings is up 3% from last month"
                type={CardTypes.ACCOUNTS}
              />
            </TouchableOpacity>
          </View>
          <View style={card}>
            <TouchableOpacity onPress={() => {}}>
              <CashCardItem
                title="Goodness"
                subTitle="Cash Rewards"
                titleIcon={require('../../Assets/Images/heart.png')}
                amount="500.40"
                type={CardTypes.ACCOUNTS}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    minHeight: '100%',
    paddingTop: 40,
    paddingBottom: 190,
    paddingHorizontal: SCREEN_WIDTH > 576 ? '10%' : 15,
    backgroundColor: colors.light,
    alignItems: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
    marginTop: 20,
    marginBottom: 20,
  },
  cards: {
    width: '100%',
  },
  card: {
    marginBottom: 15,
  },
});
