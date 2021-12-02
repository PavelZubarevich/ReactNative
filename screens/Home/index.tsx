import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, View, Text, ListRenderItem, FlatList} from 'react-native';
import colors from '../../colors/colors';
import {BurgerBTN, Title, CashCard, GoodnessCard} from '../../components';
import {AppHeader} from '../../theme';
import {
  data,
  months,
  windowHeight,
  boxHeight,
  ICardProps,
  SCREEN_WIDTH,
} from './constants';
import {
  OffsetYProvider,
  IndexProvider,
} from '@n1ru4l/react-in-center-of-screen';

export const Home: FC = () => {
  const [dayPart, setDayPart] = useState<string>('');

  useEffect(() => {
    const time = new Date().getHours();

    if (time > 4 && time <= 9) {
      setDayPart('Morning');
    } else if (time > 9 && time <= 15) {
      setDayPart('Afternoon');
    } else {
      setDayPart('Eveningihjdlohgnjdfk');
    }
  }, []);

  const generateGreeting = () => {
    const date = new Date();
    return `I Good ${dayPart} Danny | ${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const renderItem: ListRenderItem<ICardProps> = ({index, item}) => (
    <IndexProvider index={index}>
      {() => <GoodnessCard imageSource={item.image} videoSource={item.video} />}
    </IndexProvider>
  );

  const {main, greeting} = styles;
  return (
    <View>
      <AppHeader leftComponent={<BurgerBTN />} centerComponent={<Title />} />
      <View style={main}>
        <OffsetYProvider
          columnsPerRow={1}
          listItemHeight={boxHeight}
          centerYStart={(windowHeight * 1.2) / 3}
          centerYEnd={(windowHeight * 2) / 3}
          contentOffset={450}>
          {({setOffsetY}: any) => (
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
              onScroll={event => {
                setOffsetY(event.nativeEvent.contentOffset.y);
              }}
            />
          )}
        </OffsetYProvider>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: '100%',
    paddingBottom: 190,
    paddingHorizontal: SCREEN_WIDTH > 576 ? '15%' : 15,
    backgroundColor: colors.light,
  },
  greeting: {
    color: colors.grey,
    fontSize: 15,
    fontFamily: 'SFProRounded-Regular',
    marginVertical: 10,
  },
});
