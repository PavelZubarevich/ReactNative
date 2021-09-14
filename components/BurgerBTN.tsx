import React, {FC} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import BurgerImage from '../Assets/Images/burgerMenuIcon.png';

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
    width: Dimensions.get('window').width > 576 ? 35 : 20,
    height: Dimensions.get('window').width > 576 ? 35 : 20,
  },
});
