import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const GoBackBTN: FC = () => {
  const navigation = useNavigation();

  const {image} = styles;
  return (
    <Image
      source={require('../Assets/Images/back.png')}
      style={image}
      onPress={() => navigation.goBack()}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 5,
    height: SCREEN_WIDTH > 576 ? 35 : 23,
    width: SCREEN_WIDTH > 576 ? 24 : 18,
  },
});
