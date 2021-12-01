import React, {FC, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Avatar} from 'react-native-elements';
import {AvatarModal} from './';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const UserAvatar: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  const {main} = styles;
  return (
    <>
      <Avatar
        rounded
        source={require('../Assets/Images/oval.png')}
        containerStyle={main}
        onPress={modalHandler}
      />
      <AvatarModal showModal={showModal} modalHandler={modalHandler} />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 5,
    height: SCREEN_WIDTH > 576 ? 60 : 40,
    width: SCREEN_WIDTH > 576 ? 60 : 40,
  },
});
