import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SignedApp} from './screens/SignedApp';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <SignedApp />
      {/* <SignIn /> */}
    </SafeAreaProvider>
  );
};

export default App;
