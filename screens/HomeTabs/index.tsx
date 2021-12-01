import React, {FC} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import colors from '../../colors/colors';
import {BlurView} from '@react-native-community/blur';
import {screens, Tab, PLATFORM_IOS} from './constants';

export const HomeTabs: FC = () => {
  const {tabBarStyle, blurStyle, pinkBackground} = styles;
  return (
    <>
      <StatusBar backgroundColor={colors.pink} />
      <Tab.Navigator
        //backBehavior={'history'}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.pink,
          tabBarInactiveTintColor: colors.darkGrey,
          tabBarStyle: PLATFORM_IOS && {
            borderTopColor: colors.grey,
            backgroundColor: 'transparent',
          },
          tabBarLabelStyle: {fontSize: 12},
        }}
        tabBar={props => {
          return PLATFORM_IOS ? (
            <View style={tabBarStyle}>
              <View style={pinkBackground} />
              <BlurView style={blurStyle} blurType="light" blurAmount={50}>
                <BottomTabBar {...props} />
              </BlurView>
            </View>
          ) : (
            <BottomTabBar {...props} />
          );
        }}>
        {screens.map(elem => {
          return (
            <Tab.Screen
              key={Date.now()}
              name={elem.name}
              component={elem.component}
              options={{
                tabBarIcon: () => <Image source={elem.tabImage} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'relative',
  },
  blurStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  pinkBackground: {
    backgroundColor: colors.pink,
    alignSelf: 'center',
    width: '50%',
    height: 35,
  },
});
