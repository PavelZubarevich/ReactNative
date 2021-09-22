import React, {FC} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';
import {CashCardItem, CashHeader} from '.';
import colors from '../colors/colors';
import {StackNavigationProp} from '../types/types';

export const CashCard: FC = () => {
  const navigation = useNavigation<StackNavigationProp>();

  const {containerStyle, titleStyle, dividerStyle} = styles;
  return (
    <Card containerStyle={containerStyle}>
      <Card.Title style={titleStyle}>
        <CashHeader title="accounts overview" />
      </Card.Title>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Checking', {subTitle: 'subTitle'})
          }>
          <CashCardItem
            title="Checking"
            subTitle="Main account (...0353)"
            amount="1,500.20"
          />
        </TouchableOpacity>

        <Card.Divider style={dividerStyle} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Saving', {subTitle: 'subTitle'})}>
          <CashCardItem
            title="Savings"
            subTitle="Buy a house (...4044)"
            amount="5,000.20"
          />
        </TouchableOpacity>

        <Card.Divider style={dividerStyle} />
        <TouchableOpacity onPress={() => {}}>
          <CashCardItem
            title="Goodness"
            subTitle="Cash Rewards"
            titleIcon={require('../Assets/Images/heart.png')}
            amount="500.40"
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 7,
    borderWidth: 0,
    marginHorizontal: 0,
    marginTop: 0,
    marginBottom: 20,
    paddingHorizontal: 0,
    paddingTop: 25,
    paddingBottom: 0,
  },
  titleStyle: {
    alignSelf: 'center',
  },
  dividerStyle: {
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: colors.lightGrey,
    height: 1,
  },
});
