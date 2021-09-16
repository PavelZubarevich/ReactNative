import React, {FC} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import BurgerImage from '../Assets/Images/burgerMenuIcon.png';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const BurgerBTN: FC = () => {
  const {main, image} = styles;
  return (
    <View style={main}>
      <Image source={BurgerImage} style={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
  image: {
    marginTop: 5,
    width: SCREEN_WIDTH > 576 ? 35 : 20,
    height: SCREEN_WIDTH > 576 ? 35 : 20,
  },
});
