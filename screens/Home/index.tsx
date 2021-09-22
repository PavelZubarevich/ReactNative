import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, View, Text, ListRenderItem} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import colors from '../../colors/colors';
import {BurgerBTN, Title, CashCard, GoodnessCard} from '../../components';
import {AppHeader} from '../../theme';
import {data, months} from './constants';
import {ICardProps} from './types';

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

  const renderItem: ListRenderItem<ICardProps> = ({item}) => {
    return <GoodnessCard imageSource={item.image} videoSource={item.video} />;
  };

  const {main, greeting} = styles;
  return (
    <View>
      <AppHeader leftComponent={<BurgerBTN />} centerComponent={<Title />} />
      <View style={main}>
        <FlatList
          ListHeaderComponent={
            <>
              <Text style={greeting}>{generateGreeting()}</Text>
              <CashCard />
            </>
          }
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: '100%',
    paddingBottom: 190,
    paddingHorizontal: 15,
    backgroundColor: colors.light,
  },
  greeting: {
    color: colors.grey,
    fontSize: 15,
    fontFamily: 'SFProRounded-Regular',
    marginVertical: 10,
  },
});
