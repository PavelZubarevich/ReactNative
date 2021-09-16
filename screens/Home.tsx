import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import colors from '../colors/colors';
import {BurgerBTN, Title, CashCard} from '../components';
import {HomeScreenNavigationProp} from '../types/types';
import {AppHeader} from '../theme';

interface IHome {
  navigation: HomeScreenNavigationProp;
}

enum months {
  'January',
  'February',
  'March',
  'April ',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
}

export const Home: FC<IHome> = ({navigation}) => {
  const [dayPart, setDayPart] = useState<string>('');

  useEffect(() => {
    const time = new Date().getHours();

    if (time > 4 && time <= 9) {
      setDayPart('morning');
    } else if (time > 9 && time <= 15) {
      setDayPart('afternoon');
    } else {
      setDayPart('evening');
    }
  });

  const generateGreeting = () => {
    const date = new Date();
    return `Good ${dayPart} Danny | ${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const {main, greeting} = styles;

  return (
    <View>
      <AppHeader leftComponent={<BurgerBTN />} centerComponent={<Title />} />
      <View style={main}>
        <Text style={greeting}>{generateGreeting()}</Text>
        <CashCard />
      </View>
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

const styles = StyleSheet.create({
  main: {
    padding: 15,
  },
  greeting: {
    color: colors.grey,
    fontSize: 14,
    fontFamily: 'SFProRounded-Regular',
  },
});
