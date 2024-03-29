import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
  Text,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {GoBackBTN, Title, CashHeader, CashCardItem} from '../../components';
import {ICardProps, ISaving, DATA, SCREEN_WIDTH} from './constants';
import {AppHeader, SearchBar, OvalOutlinedButton} from '../../theme';
import colors from '../../colors/colors';
import {CardTypes} from '../../components/CashCardItem/constants';

export const Saving: FC<ISaving> = ({route}) => {
  const renderItem: ListRenderItem<ICardProps> = ({item}) => {
    return (
      <TouchableOpacity>
        <CashCardItem
          title={item.title}
          subTitle={item.date}
          amount={item.amount}
          chevron={false}
          type={CardTypes.SAVING}
        />
      </TouchableOpacity>
    );
  };

  const {
    background,
    main,
    sectionHeader,
    filterGroup,
    search,
    filterBtn,
    graphStyle,
    listHeader,
    listStyle,
    infoLine,
    infoText,
    infoValue,
  } = styles;
  return (
    <View style={background}>
      <AppHeader
        leftComponent={<GoBackBTN />}
        centerComponent={
          <Title title={'Saving'} subTitle={route.params?.subTitle} />
        }
      />
      <View style={main}>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => `${item}${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={listStyle}
          ListHeaderComponent={
            <>
              <View style={sectionHeader}>
                <CashHeader />
                <Image
                  source={require('../../Assets/Images/savingsGraphV2.png')}
                  style={graphStyle}
                />
              </View>
              <View style={infoLine}>
                <Text style={infoText}>Total ingertd gained</Text>
                <Text style={infoValue}>+$50.00</Text>
              </View>
              <View style={infoLine}>
                <Text style={infoText}>Goodness points Gained</Text>
                <Text style={infoValue}>+600</Text>
              </View>

              <View style={filterGroup}>
                <View style={search}>
                  <SearchBar placeholder="Search transiction" />
                </View>
                <View style={filterBtn}>
                  <OvalOutlinedButton
                    title="Filter by"
                    titleColor={colors.grey}
                  />
                </View>
              </View>
              <View style={listHeader}>
                <Text>End day balance - Jul 11</Text>
                <Text>$5,000</Text>
              </View>
            </>
          }
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
  },
  main: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: colors.light,
  },
  container: {
    minWidth: '100%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sectionHeader: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: SCREEN_WIDTH > 576 ? '10%' : 15,
    backgroundColor: colors.white,
    marginBottom: 15,
  },
  filterGroup: {
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    width: '70%',
  },
  filterBtn: {
    width: '25%',
    height: 35,
  },
  graphStyle: {
    maxHeight: 190,
    maxWidth: '100%',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  listStyle: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    marginBottom: 0,
    paddingBottom: 130,
    paddingHorizontal: SCREEN_WIDTH > 576 ? '10%' : 15,
  },
  infoLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  infoText: {
    fontSize: 18,
  },
  infoValue: {
    fontSize: 18,
    color: colors.green,
  },
});
