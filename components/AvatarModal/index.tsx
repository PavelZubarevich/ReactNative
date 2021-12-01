import React, {FC} from 'react';
import {
  StyleSheet,
  Modal,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {logOut} from '../../redux/actionCreators/signInActionCreators';
import colors from '../../colors/colors';
import {IModal, SCREEN_WIDTH} from './constants';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '../../screens/SignedApp/constants';

export const AvatarModal: FC<IModal> = ({showModal, modalHandler}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp>();

  const {background, modal, textStyle, divider} = styles;
  return (
    <Modal transparent visible={showModal} animationType="fade">
      <TouchableWithoutFeedback onPress={modalHandler}>
        <View style={background} />
      </TouchableWithoutFeedback>
      <View style={modal}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={textStyle}>Profile</Text>
        </TouchableOpacity>
        <View style={divider} />
        <TouchableOpacity onPress={() => dispatch(logOut())}>
          <Text style={textStyle}>Log out</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
  modal: {
    position: 'absolute',
    right: 10,
    top: SCREEN_WIDTH > 576 ? 95 : SCREEN_WIDTH > 386 ? 80 : 65,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 20 : 14,
    color: colors.darkGrey,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGrey,
    marginVertical: 8,
  },
});
