import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {GoBackBTN, Title} from '../components';
import {StackNavigationProp} from './SignedApp/constants';
import {AppHeader} from '../theme';

interface IAccounts {
  navigation: StackNavigationProp;
}

export const Accounts: FC<IAccounts> = ({navigation}) => {
  const {} = styles;
  return (
    <View>
      <AppHeader
        leftComponent={<GoBackBTN />}
        centerComponent={<Title title={'Accounts'} />}
      />
      <Text>Accounts</Text>
      <Button
        title="Checking"
        type="outline"
        onPress={() => {
          navigation.navigate('Checking', {subTitle: 'strinh 2'});
        }}
      />
      <Button
        title="Saving"
        type="outline"
        onPress={() => {
          navigation.navigate('Saving');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
