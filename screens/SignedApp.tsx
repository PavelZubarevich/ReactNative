import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabs, Checking, Saving} from '.';
import {StackParams} from '../types/types';

const Stack = createNativeStackNavigator<StackParams>();

export const SignedApp: FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen name="Checking" component={Checking} />
          <Stack.Screen name="Saving" component={Saving} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
