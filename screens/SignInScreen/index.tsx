import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import colors from '../../colors/colors';
import {OvalOutlinedButton} from '../../theme';
import {connect, ConnectedProps} from 'react-redux';
import {logIn, logInErr} from '../../redux/actionCreators/actionCreators';
import {connectErrState} from '../../redux/types';
import {CustomInput, OvalSolidButton, TextButton} from '../../theme';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SignIn = (props: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpenKeyboard, setOpenKeyboard] = useState<boolean>(false);

  const openKeybord = () => {
    setOpenKeyboard(false);
  };
  const closeKeybord = () => {
    setOpenKeyboard(true);
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      const open = Keyboard.addListener('keyboardDidHide', openKeybord);
      const close = Keyboard.addListener('keyboardDidShow', closeKeybord);
      return () => {
        open.remove();
        close.remove();
      };
    }
  }, []);

  const signInHandl = () => {
    setLoading(true);
    const signInPromise = new Promise<string>((resolve, reject) => {
      setTimeout((): void => {
        if (
          /^[A-Za-z]+@itechart-group.com/.test(email) &&
          password === 'admin'
        ) {
          const jwt: string = '11';
          resolve(jwt);
        } else {
          reject();
        }
      }, 1000);
    });
    signInPromise
      .then(jwt => {
        props.login(jwt);
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
  } = styles;
  return (
    <SafeAreaView style={main}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      <ScrollView
        contentContainerStyle={content}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag">
        <View style={titleBlock}>
          <Text style={title}>Login</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
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

              <Text style={loginWarning}>{props.authErr}</Text>
            </View>
            <View style={{marginBottom: 20}}>
              <OvalSolidButton
                title={!loading ? 'login' : ''}
                icon={
                  loading && <ActivityIndicator color={colors.grey} size={26} />
                }
                titleColor="#fff"
                buttonColor={colors.pink}
                onPress={signInHandl}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        {!isOpenKeyboard && (
          <View style={bottomBlock}>
            <Text style={bottomTitle}>Lets test 2 ways to log in</Text>
            <View style={bottomButtons}>
              <OvalOutlinedButton
                title="Touch ID"
                titleColor={colors.grey}
                buttonColor={colors.grey}
              />
              <OvalOutlinedButton
                title="Face ID"
                titleColor={colors.darckGrey}
                buttonColor={colors.darckGrey}
              />
            </View>
          </View>
        )}
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
    color: colors.darckGrey,
    marginBottom: 5,
  },
  form: {
    justifyContent: 'space-between',
    marginBottom: 45,
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
    fontSize: SCREEN_WIDTH > 576 ? 18 : 12,
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
});

const mapState = (state: connectErrState) => ({authErr: state.auth.error});
const mapDispatch = {
  login: (jwt: string) => logIn(jwt),
  loginErr: () => logInErr(),
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

export default connector(SignIn);
