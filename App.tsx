import React, {FC, useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './navigator';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import {Platform, StyleSheet} from 'react-native';
import colors from './colors/colors';
import AnimatedSplash from 'react-native-animated-splash-screen';

const App: FC = () => {
  const [appHasLoaded, setAppHasLoaded] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
    if (Platform.OS !== 'ios') {
      setTimeout(() => setAppHasLoaded(true), 135);
    } else {
      setAppHasLoaded(true);
    }
  }, []);
  const {} = styles;

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={appHasLoaded}
      logoImage={require('./Assets/Images/logo_splash_screen.png')}
      backgroundColor={colors.pink}
      // logoHeight={130}
      // logoWidth={110}>
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Navigator />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </AnimatedSplash>
  );
};

export default App;

const styles = StyleSheet.create({});
