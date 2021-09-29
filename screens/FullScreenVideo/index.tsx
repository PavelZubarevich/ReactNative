import React, {FC, useState} from 'react';
import {StyleSheet, StatusBar, SafeAreaView, Platform} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {videoScreenRouteProp, videoScreenNavigationProp} from './constants';

interface IVideo {
  route: videoScreenRouteProp;
  navigation: videoScreenNavigationProp;
}

export const FullScreenVideo: FC<IVideo> = ({route, navigation}) => {
  const [showStatusBar, setStatusBar] = useState<boolean>(true);

  const {main, videoStyle} = styles;
  return (
    <SafeAreaView
      style={[
        main,
        showStatusBar && {
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
      ]}>
      <StatusBar backgroundColor={'#000'} hidden={!showStatusBar} />
      <VideoPlayer
        source={{
          uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4`,
          type: 'mp4'
        }}
        style={videoStyle}
        navigator={navigation}
        disableVolume
        toggleResizeModeOnFullscreen={false}
        onEnterFullscreen={() => setStatusBar(false)}
        onExitFullscreen={() => setStatusBar(true)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoStyle: {
    flex: 1,
  },
});
