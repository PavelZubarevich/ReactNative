import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GoBackBTN, Title} from '../components';
import {CheckingScreenRouteProp} from '../types/types';
import {AppHeader} from '../theme/index';

interface ICheckung {
  route: CheckingScreenRouteProp;
}

export const Checking: FC<ICheckung> = ({route}) => {
  //==================================================================
  let subTitle: any = null;
  if (route.params) {
    subTitle = route.params.subTitle;
  }
  //====================================================================
  const {main, content} = styles;
  return (
    <View style={main}>
      <AppHeader
        leftComponent={<GoBackBTN />}
        centerComponent={<Title title={'Checking'} subTitle={subTitle} />}
      />
      <View style={content}>
        <Text>Comming soon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
