import React, {FC} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const GoBackBTN: FC = () => {
  const navigation = useNavigation();

  const {main, image} = styles;
  return (
    <View style={main}>
      <Image
        source={require('../Assets/Images/back.png')}
        style={image}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 5,
    height: SCREEN_WIDTH > 576 ? 35 : 23,
    width: SCREEN_WIDTH > 576 ? 24 : 18,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
