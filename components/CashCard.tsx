import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Card, ListItem} from 'react-native-elements';
import colors from '../colors/colors';
import {CashCardItem, CashHeader} from '.';

interface IHome {}

export const CashCard: FC<IHome> = () => {
  const {containerStyle, titleStyle, listStyle} = styles;
  return (
    <Card containerStyle={containerStyle}>
      <Card.Title style={titleStyle}>
        <CashHeader title="accounts overview" amount={7000.80} />
      </Card.Title>
      <View style={listStyle}>
        <CashCardItem />
        <Card.Divider />
        <CashCardItem />
        <Card.Divider />
        <CashCardItem />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 7,
    borderWidth: 0,
    marginHorizontal: 0,
    paddingHorizontal: 0
  },
  titleStyle: {
    alignSelf: 'center',
  },
  listStyle: {
    
  },
});
