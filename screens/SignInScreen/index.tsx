import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import colors from '../../colors/colors';
import {
  CustomInput,
  OvalSolidButton,
  OvalOutlinedButton,
  TextButton,
} from '../../theme';
import {SCREEN_WIDTH, Props, connector} from './constants';
// import jwt from 'react-native-pure-jwt';

export const SignIn = (props: Props) => {
  const [isHorizontal, serHorizontal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const checkPortrait = () => {
    serHorizontal(
      Dimensions.get('window').width > Dimensions.get('window').height &&
        Dimensions.get('window').height < 550,
    );
  };

  useEffect(() => {
    const listener = Dimensions.addEventListener('change', checkPortrait);
    return () => listener.remove();
  }, []);

  const signInHandl = () => {
    setLoading(true);
    const signInPromise = new Promise<string>((resolve, reject) => {
      setTimeout((): void => {
        if (
          /^[A-Za-z]+@itechart-group.com/.test(email) &&
          password === 'admin'
        ) {
          resolve(
            // jwt.sign(
            //   {
            //     iss: email,
            //     exp: new Date().getTime() + 3600 * 1000,
            //     name: 'Danny',
            //   },
            //   'my-secret',
            //   {
            //     alg: 'HS256',
            //   },
            // ),
            'kfsdjl'
          );
        } else {
          reject();
        }
      }, 1000);
    });
    signInPromise
      .then(token => {
        props.login(token);
      })
      .catch(() => {
        props.loginErr();
        setLoading(false);
      });
  };

  const {
    main,
    content,
    titleBlock,
    title,
    form,
    formTopStyle,
    loginWarning,
    bottomBlock,
    bottomButtons,
    bottomTitle,
    outlineButtonContainer,
  } = styles;

  const {
    contentHorizontal,
    horizontalRightBlock,
    horizontalTitleBlock,
    horizontalTitle,
    horizontalLoginWarning,
    horizontalLeftBlock,
    horizontalBottomButtons,
  } = stylesHorizontal;

  return (
    <SafeAreaView style={main}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      <ScrollView
        contentContainerStyle={[content, isHorizontal && contentHorizontal]}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <View style={[{flex: 1}, isHorizontal && horizontalRightBlock]}>
            <View style={[titleBlock, isHorizontal && horizontalTitleBlock]}>
              <Text style={[title, isHorizontal && horizontalTitle]}>
                Login
              </Text>
            </View>

            <View style={form}>
              <View style={formTopStyle}>
                <CustomInput
                  placeholder={'Your email address'}
                  label={'Email'}
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
                <CustomInput
                  placeholder={'Password'}
                  label={'Password'}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <TextButton title="forgot Password" titleColor={colors.pink} />

                <Text
                  style={[
                    loginWarning,
                    isHorizontal && horizontalLoginWarning,
                  ]}>
                  {props.authErr}
                </Text>
              </View>
              <View>
                <OvalSolidButton
                  title={!loading ? 'login' : ''}
                  icon={
                    loading && (
                      <ActivityIndicator color={colors.grey} size={26} />
                    )
                  }
                  buttonColor={colors.pink}
                  onPress={signInHandl}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>

        <View style={[bottomBlock, isHorizontal && horizontalLeftBlock]}>
          <Text style={bottomTitle}>Lets test 2 ways to log in</Text>
          <View
            style={[bottomButtons, isHorizontal && horizontalBottomButtons]}>
            <View style={outlineButtonContainer}>
              <OvalOutlinedButton
                title="Touch ID"
                titleColor={colors.grey}
                buttonColor={colors.grey}
              />
            </View>
            <View style={outlineButtonContainer}>
              <OvalOutlinedButton
                title="Face ID"
                titleColor={colors.darkGrey}
                buttonColor={colors.darkGrey}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content: {
    paddingHorizontal: SCREEN_WIDTH > 576 ? '15%' : 30,
    paddingTop: SCREEN_WIDTH > 576 ? 100 : 50,
    paddingBottom: SCREEN_WIDTH > 576 ? 70 : 35,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 550,
  },
  titleBlock: {
    alignSelf: 'flex-start',
    borderBottomColor: colors.pink,
    borderBottomWidth: 2,
    marginBottom: SCREEN_WIDTH > 576 ? 40 : 25,
  },
  title: {
    fontFamily: 'SFProRounded-Bold',
    fontSize: SCREEN_WIDTH > 576 ? 28 : 20,
    color: colors.darkGrey,
    marginBottom: 5,
  },
  form: {
    justifyContent: 'space-between',
    marginBottom: 65,
    flex: 1,
  },
  formTopStyle: {
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  loginWarning: {
    fontFamily: 'SFProRounded-Regular',
    color: 'red',
    marginBottom: 15,
    alignSelf: 'flex-end',
    marginTop: SCREEN_WIDTH > 576 ? 10 : 5,
    fontSize: SCREEN_WIDTH > 576 ? 18 : 13,
  },
  bottomBlock: {
    alignItems: 'center',
  },
  bottomTitle: {
    fontFamily: 'SFProRounded-Bold',
    fontSize: 12,
    color: colors.grey,
    marginBottom: 20,
  },
  bottomButtons: {
    width: '100%',
    flexDirection: 'row',
  },
  outlineButtonContainer: {
    height: 35,
  },
});

const stylesHorizontal = StyleSheet.create({
  contentHorizontal: {
    paddingHorizontal: 50,
    paddingTop: 0,
    flexDirection: 'row',
    minHeight: 0,
  },
  horizontalRightBlock: {
    flex: 1,
    marginRight: 100,
  },
  horizontalTitleBlock: {
    marginBottom: 15,
  },
  horizontalTitle: {
    fontSize: 20,
  },
  horizontalLoginWarning: {
    marginTop: 5,
    fontSize: 13,
  },
  horizontalLeftBlock: {
    width: '35%',
    justifyContent: 'center',
  },
  horizontalBottomButtons: {
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 30,
  },
});

export default connector(SignIn);
