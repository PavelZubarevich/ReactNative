import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GoBackBTN, Title} from '../components';
import {AppHeader} from '../theme';

export const Giving: FC = () => {
  const {main, content} = styles;
  return (
    <View style={main}>
      <AppHeader
        leftComponent={<GoBackBTN />}
        centerComponent={<Title title={'Giving'} />}
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
