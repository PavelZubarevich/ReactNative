import React, {FC, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Avatar} from 'react-native-elements';
import {AvatarModal} from './';
import {connect, ConnectedProps} from 'react-redux';
import {connectDataState} from '../redux/types/data';

const SCREEN_WIDTH = Dimensions.get('window').width;

const mapState = (state: connectDataState) => ({
  avatarSource: state.data.avatarSource,
});

const connector = connect(mapState);
type Props = ConnectedProps<typeof connector>;

const UserAvatar: FC<Props> = ({avatarSource}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  const {main} = styles;
  return (
    <>
      <Avatar
        rounded
        source={{uri: avatarSource}}
        containerStyle={main}
        onPress={modalHandler}
      />
      <AvatarModal showModal={showModal} modalHandler={modalHandler} />
    </>
  );
};

export default connector(UserAvatar);

const styles = StyleSheet.create({
  main: {
    marginTop: 5,
    height: SCREEN_WIDTH > 576 ? 60 : 40,
    width: SCREEN_WIDTH > 576 ? 60 : 40,
  },
});
