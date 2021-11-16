import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import colors from '../../colors/colors';
import {ICamera} from './constants';

export const Camera: FC<ICamera> = ({route, navigation}) => {
  const [{cameraRef}, {takePicture}] = useCamera();

  const photoHandler = async () => {
    console.log(1);
    try {
      console.log(2);
      const data = await takePicture();
      console.log(3);
      await route.params?.takePhoto(data.uri);
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };

  const {main, cameraStyle, buttonStyle} = styles;
  return (
    <View style={main}>
      <RNCamera
        style={cameraStyle}
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}>
        <Button buttonStyle={buttonStyle} onPress={() => photoHandler()} />
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  cameraStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  buttonStyle: {
    borderRadius: 50,
    width: 90,
    height: 90,
    backgroundColor: colors.pink,
  },
});
