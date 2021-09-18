import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Card, ListItem} from 'react-native-elements';
import colors from '../colors/colors';

interface IItem {}

export const CashCardItem: FC<IItem> = () => {
  const {containerStyle} = styles;
  return (
    <ListItem containerStyle={containerStyle}>
      <ListItem.Content>
        <ListItem.Title>Checking</ListItem.Title>
        <ListItem.Subtitle>Main account (...0353)</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  containerStyle: {},
});
