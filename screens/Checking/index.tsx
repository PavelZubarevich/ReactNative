import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GoBackBTN, Title, CashHeader} from '../../components';
import {CheckingScreenRouteProp} from './constants';
import {AppHeader} from '../../theme/index';
import colors from '../../colors/colors';
import {OvalOutlinedButton, OvalTextInput} from '../../theme';

interface ICheckung {
  route: CheckingScreenRouteProp;
}

export const Checking: FC<ICheckung> = ({route}) => {
  const {main, filterGroup, filterBtn, search} = styles;
  return (
    <View>
      <AppHeader
        leftComponent={<GoBackBTN />}
        centerComponent={
          <Title title={'Checking'} subTitle={route.params?.subTitle} />
        }
      />
      <View style={main}>
        <CashHeader />
        <View style={filterGroup}>
          <View style={search}>
            <OvalTextInput placeholder="Search transiction" />
          </View>
          <View style={filterBtn}>
            <OvalOutlinedButton title="Filter by" titleColor={colors.grey} />
          </View>
        </View>
        <View>
          <View></View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: '100%',
    paddingTop: 40,
    paddingBottom: 190,
    paddingHorizontal: 15,
    backgroundColor: colors.light,
    alignItems: 'center',
  },
  filterGroup: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    width: '70%',
  },
  filterBtn: {
    width: '25%',
    height: 35,
  },
});
