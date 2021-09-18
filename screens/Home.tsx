import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import colors from '../colors/colors';
import {BurgerBTN, Title, CashCard} from '../components';
import {AppHeader} from '../theme';

enum months {
  'Jan',
  'Feb',
  'Mar',
  'Apr ',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
}

export const Home: FC = () => {
  const [dayPart, setDayPart] = useState<string>('');

  useEffect(() => {
    const time = new Date().getHours();

    if (time > 4 && time <= 9) {
      setDayPart('Morning');
    } else if (time > 9 && time <= 15) {
      setDayPart('Afternoon');
    } else {
      setDayPart('Evening');
    }
  }, []);

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
      <ScrollView contentContainerStyle={main}>
        <Text style={greeting}>{generateGreeting()}</Text>
        <CashCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: '100%',
    paddingTop: 10,
    paddingBottom: 110,
    paddingHorizontal: 15,
    backgroundColor: colors.light,
  },
  greeting: {
    color: colors.grey,
    fontSize: 15,
    fontFamily: 'SFProRounded-Regular',
  },
});
