import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './navigator';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
