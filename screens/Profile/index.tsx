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
import {SCREEN_WIDTH, connector, Props} from './constants';
import colors from '../../colors/colors';
import DatePicker from 'react-native-date-picker';
import dateFormat from 'dateformat';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '../SignedApp/constants';
import ImagePicker from 'react-native-image-crop-picker';

const Profile: FC<Props> = ({
  name,
  birth,
  avatarSource,
  changeAvatar,
  changeBirth,
  changeFullName,
}) => {
  const [editMode, setMode] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>(name);
  const [dateString, setDate] = useState<string>(birth);
  const [avatar, setAvatar] = useState<string>(avatarSource);

  const navigation = useNavigation<StackNavigationProp>();

  const cancelHandler = () => {
    setAvatar(avatarSource);
    setDate(birth);
    setFullName(name);
    setMode(false);
  };
  const applyHandler = () => {
    changeAvatar(avatar);
    changeBirth(dateString);
    changeFullName(fullName);
    setMode(false);
  };

  const takePhoto = (uri: string) => {
    setAvatar(uri);
  };

  const launchImageLibraryHandler = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
    }).then(image => {
      setAvatar(image.path);
    });
  };

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
                source={{
                  uri: avatar,
                }}
                size="xlarge"
                avatarStyle={avatarStyle}
              />
              {editMode && (
                <>
                  <Icon
                    reverse
                    name="add-a-photo"
                    type="material"
                    color={colors.pink}
                    size={22}
                    containerStyle={cameraBTNStyle}
                    // onPress={() => launchCameraHandler()}
                    onPress={() => navigation.navigate('Camera', {takePhoto})}
                  />
                  <Icon
                    reverse
                    name="add-photo-alternate"
                    type="material"
                    color={colors.pink}
                    size={22}
                    containerStyle={addPhotoStyle}
                    onPress={() => launchImageLibraryHandler()}
                  />
                </>
              )}
            </View>
            <View style={fieldsBlock}>
              <CustomInput
                label="Full name"
                value={fullName}
                disabled={!editMode}
                onChangeText={text => setFullName(() => text)}
              />
              {editMode ? (
                <>
                  <Text style={titleStyle}>Date Of Birh</Text>
                  <DatePicker
                    date={new Date(dateString)}
                    onDateChange={(date: Date) =>
                      setDate(() => dateFormat(date, 'mmmm d, yyyy'))
                    }
                    style={{backgroundColor: colors.light}}
                    fadeToColor="none"
                    maximumDate={new Date()}
                    mode="date"
                    timeZoneOffsetInMinutes={500}
                  />
                </>
              ) : (
                <CustomInput label="Date Of Birh" value={birth} disabled />
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
                  onPress={() => cancelHandler()}
                />
                <OvalSolidButton
                  title="apply updates"
                  buttonColor={colors.pink}
                  containerStyle={twoButtonStyle}
                  onPress={() => applyHandler()}
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
    minHeight: 600,
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

export default connector(Profile);
