import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppHeader} from '../theme';
import {GoBackBTN, Title} from '../components';

export const Payments: FC = () => {
  const {main, content} = styles;
  return (
    <View style={main}>
      <AppHeader
        leftComponent={<GoBackBTN />}
        centerComponent={<Title title={'Payments'} />}
      />
      <View style={content}>
        <Text>Comming soon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
