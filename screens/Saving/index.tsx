import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GoBackBTN, Title} from '../../components';
import {SavingScreenRouteProp} from './constants';
import {AppHeader} from '../../theme';
interface ISaving {
  route: SavingScreenRouteProp;
}

export const Saving: FC<ISaving> = ({route}) => {
  const {main, content} = styles;
  return (
    <View style={main}>
      <AppHeader
        leftComponent={<GoBackBTN />}
        centerComponent={
          <Title title={'Saving'} subTitle={route.params?.subTitle} />
        }
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
