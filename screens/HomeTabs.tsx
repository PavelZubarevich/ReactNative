import React, {FC} from 'react';
import {Image, StatusBar, StyleSheet, Platform, View} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Accounts, Giving, Payments, Cards, Home} from '.';
import {BottomBarParams} from '../types/types';
import colors from '../colors/colors';
import HomeImage from '../Assets/Images/home.png';
import AccountsImage from '../Assets/Images/accounts.png';
import GivingImage from '../Assets/Images/giving.png';
import PaymentImage from '../Assets/Images/payment.png';
import CardsImage from '../Assets/Images/cards.png';
import {BlurView} from '@react-native-community/blur';

const Tab = createBottomTabNavigator<BottomBarParams>();
const PLATFORM_IOS = Platform.OS === 'ios';

export const HomeTabs: FC = () => {
  const {blurStyle, pink} = styles;
  return (
    <>
      <StatusBar backgroundColor={colors.pink} />
      <Tab.Navigator
        //backBehavior={'history'}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.pink,
          tabBarInactiveTintColor: colors.darckGrey,
          tabBarStyle: PLATFORM_IOS && {
            borderTopColor: colors.grey,
            backgroundColor: 'transparent',
          },
        }}
        tabBar={props => {
          return PLATFORM_IOS ? (
            <View style={{position: 'relative'}}>
              <View style={pink} />
              <BlurView style={blurStyle} blurType="light" blurAmount={50}>
                <BottomTabBar {...props} />
              </BlurView>
            </View>
          ) : (
            <BottomTabBar {...props} />
          );
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Image source={HomeImage} />,
          }}
        />
        <Tab.Screen
          name="Accounts"
          component={Accounts}
          options={{
            tabBarIcon: () => <Image source={AccountsImage} />,
          }}
        />
        <Tab.Screen
          name="Giving"
          component={Giving}
          options={{tabBarIcon: () => <Image source={GivingImage} />}}
        />
        <Tab.Screen
          name="Payments"
          component={Payments}
          options={{tabBarIcon: () => <Image source={PaymentImage} />}}
        />
        <Tab.Screen
          name="Cards"
          component={Cards}
          options={{tabBarIcon: () => <Image source={CardsImage} />}}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  blurStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  pink: {
    backgroundColor: colors.pink,
    alignSelf: 'center',
    width: '50%',
    height: 20,
  },
});
