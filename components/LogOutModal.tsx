import React, {FC} from 'react';
import {
  StyleSheet,
  Modal,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux'
import {logOut} from '../redux/actionCreators/actionCreators'

interface IModal {
  showModal: boolean;
  modalHandler: () => void;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

export const LogOutModal: FC<IModal> = ({showModal, modalHandler}) => {
  const dispatch = useDispatch();
  
  const {background, modal, textStyle} = styles;
  return (
    <Modal transparent visible={showModal} animationType="fade">
      <TouchableWithoutFeedback onPress={modalHandler}>
        <View style={background} />
      </TouchableWithoutFeedback>
      <View style={modal}>
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
  },
  modal: {
    position: 'absolute',
    right: 10,
    top: Platform.OS === 'ios' ? '13%' : '11%',
    backgroundColor: '#fff',
    width: SCREEN_WIDTH > 576 ? 120 : 80,
    height: SCREEN_WIDTH > 576 ? 75 : 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  textStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 20 : 13,
  },
});
