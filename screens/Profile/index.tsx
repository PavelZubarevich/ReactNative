import React, {FC, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {GoBackBTN, Title} from '../../components';
import {AppHeader, CustomInput, OvalSolidButton} from '../../theme';
import {IProfile, SCREEN_WIDTH} from './constants';
import colors from '../../colors/colors';
import DatePicker from 'react-native-date-picker';

export const Profile: FC<IProfile> = () => {
  const [editMode, setMode] = useState<boolean>(false);
  const {
    main,
    contentStyle,
    avatarStyle,
    avatarBlock,
    cameraBTNStyle,
    addPhotoStyle,
    fieldsBlock,
    titleStyle,
    bottomButtonsBlock,
    oneButtonStyle,
    twoButtonStyle,
  } = styles;
  return (
    <>
      <AppHeader
        leftComponent={<GoBackBTN />}
        centerComponent={<Title title={'Profile'} />}
      />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={main}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag">
          <View style={contentStyle}>
            <View style={avatarBlock}>
              <Avatar
                rounded
                source={require('../../Assets/Images/oval.png')}
                size="xlarge"
                avatarStyle={avatarStyle}
              />
              <Icon
                reverse
                name="add-a-photo"
                type="material"
                color={colors.pink}
                size={22}
                containerStyle={cameraBTNStyle}
                onPress={() => console.log('fdkij')}
              />
              <Icon
                reverse
                name="add-photo-alternate"
                type="material"
                color={colors.pink}
                size={22}
                containerStyle={addPhotoStyle}
                onPress={() => console.log('fdkij')}
              />
            </View>
            <View style={fieldsBlock}>
              <CustomInput
                label="Full name"
                value="Name"
                disabled={!editMode}
              />
              {editMode ? (
                <>
                  <Text style={titleStyle}>Date Of Birh</Text>
                  <DatePicker
                    date={new Date()}
                    onDateChange={() => console.log('change')}
                    style={{backgroundColor: colors.light}}
                    fadeToColor="none"
                    maximumDate={new Date()}
                    mode="date"
                  />
                </>
              ) : (
                <CustomInput
                  label="Date Of Birh"
                  value="march 21, 1996"
                  disabled
                />
              )}
            </View>
          </View>
          <View style={bottomButtonsBlock}>
            {!editMode ? (
              <OvalSolidButton
                title="Edit profile"
                buttonColor={colors.pink}
                containerStyle={oneButtonStyle}
                onPress={() => setMode(true)}
              />
            ) : (
              <>
                <OvalSolidButton
                  title="cancel"
                  buttonColor={colors.pink}
                  containerStyle={twoButtonStyle}
                  onPress={() => setMode(false)}
                />
                <OvalSolidButton
                  title="apply updates"
                  buttonColor={colors.pink}
                  containerStyle={twoButtonStyle}
                />
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.light,
    paddingHorizontal: SCREEN_WIDTH > 576 ? '15%' : 15,
    paddingTop: 20,
    paddingBottom: 30,
  },
  contentStyle: {
    alignItems: 'center',
  },
  avatarBlock: {
    marginBottom: 30,
  },
  avatarStyle: {
    borderColor: colors.lightGrey,
    borderWidth: 8,
  },
  cameraBTNStyle: {
    position: 'absolute',
    bottom: -5,
    left: -5,
  },
  addPhotoStyle: {
    position: 'absolute',
    bottom: -5,
    right: -5,
  },
  fieldsBlock: {
    width: '80%',
  },
  titleStyle: {
    fontSize: SCREEN_WIDTH > 576 ? 22 : 16,
    fontWeight: 'bold',
    color: colors.grey,
  },
  bottomButtonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  oneButtonStyle: {
    width: '100%',
  },
  twoButtonStyle: {
    width: '45%',
  },
});
