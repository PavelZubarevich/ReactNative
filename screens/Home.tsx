import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {BurgerBTN, Title} from '../components';
import {HomeScreenNavigationProp} from '../types/types';
import {AppHeader} from '../theme';

interface IHome {
  navigation: HomeScreenNavigationProp;
}

export const Home: FC<IHome> = ({navigation}) => {
  const {} = styles;
  return (
    <View>
      <AppHeader leftComponent={<BurgerBTN />} centerComponent={<Title />} />
      <Button
        title="Checking"
        type="outline"
        onPress={() => {
          navigation.navigate('Checking');
        }}
      />
      <Button
        title="Saving"
        type="outline"
        onPress={() => {
          navigation.navigate('Saving', {subTitle: 'string'});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
