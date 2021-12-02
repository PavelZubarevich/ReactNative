import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import {GoBackBTN, Title, CashHeader, CashCardItem} from '../../components';
import {IChecking, ISectionList, DATA, SCREEN_WIDTH} from './constants';
import colors from '../../colors/colors';
import {OvalOutlinedButton, SearchBar, AppHeader} from '../../theme';
import {Divider} from 'react-native-elements';
import {CardTypes} from '../../components/CashCardItem/constants';

export const Checking: FC<IChecking> = ({route}) => {
  const {
    main,
    filterGroup,
    filterBtn,
    search,
    listStyle,
    sectionTitle,
    sectionHeader,
  } = styles;
  const renderItem: ListRenderItem<ISectionList> = ({item}) => {
    return (
      <TouchableOpacity>
        <CashCardItem
          title={item.title}
          subTitle={item.subTitle}
          amount="1,50.20"
          chevron={false}
          type={CardTypes.CHECKING}
          special={item.special}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <AppHeader
        leftComponent={<GoBackBTN />}
        centerComponent={
          <Title title={'Checking'} subTitle={route.params?.subTitle} />
        }
      />
      <View style={main}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => `${item}${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={listStyle}
          ListHeaderComponent={
            <View style={sectionHeader}>
              <CashHeader />
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
            </View>
          }
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Divider />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={sectionTitle}>{title}</Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: '100%',
    paddingTop: 0,
    paddingBottom: 190,
    paddingHorizontal: SCREEN_WIDTH > 576 ? '10%' : 15,
    backgroundColor: colors.light,
  },
  sectionHeader: {
    marginTop: 40,
  },
  filterGroup: {
    marginTop: 20,
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
  listStyle: {
    paddingBottom: 30,
  },
  sectionTitle: {
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 20,
  },
});
