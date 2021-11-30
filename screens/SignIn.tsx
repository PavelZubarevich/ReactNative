import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

export const SignIn = () => {
  const {main} = styles;
  return (
    <View style={main}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Text>ghlkfdjgfhk</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
