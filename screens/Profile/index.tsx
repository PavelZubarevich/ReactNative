import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {GoBackBTN, Title} from '../../components';
import {AppHeader} from '../../theme';
import {IProfile} from './constants';

export const Profile: FC<IProfile> = ({navigation}) => {
  const {} = styles;
  return (
    <View>
      <AppHeader
        leftComponent={<GoBackBTN />}
        centerComponent={<Title title={'Accounts'} />}
      />
      <Text>Profile</Text>
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
