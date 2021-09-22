import React, {FC, useState, useEffect, useRef} from 'react';
import {StyleSheet, View, ScrollView, Text, ListRenderItem} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {floor} from 'react-native-reanimated';
import colors from '../colors/colors';
import {BurgerBTN, Title, CashCard, GoodnessCard} from '../components';
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

interface ICardProps {
  id: string;
  image: string;
  video?: string;
}

export const Home: FC = () => {
  const [dayPart, setDayPart] = useState<string>('');
  const [data, setData] = useState<Array<object>>([
    {
      id: '1',
      image: require('../Assets/Images/rectangle2.png'),
    },
    {
      id: '2',
      image: require('../Assets/Images/rectangle.png'),
      video:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
    {
      id: '3',
      image: require('../Assets/Images/rectangle2.png'),
      video:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
    {
      id: '4',
      image: require('../Assets/Images/rectangle.png'),
      video:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
  ]);

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

  const onViewRef = React.useRef(({viewableItems, changed}) => {
    console.log(viewableItems[0]);
  });

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
          onViewableItemsChanged={onViewRef.current}
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
