import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const BurgerBTN: FC = () => {
  const {image} = styles;
  return (
    <Image
      source={require('../Assets/Images/burgerMenuIcon.png')}
      style={image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 5,
    width: SCREEN_WIDTH > 576 ? 35 : 20,
    height: SCREEN_WIDTH > 576 ? 35 : 20,
  },
});
