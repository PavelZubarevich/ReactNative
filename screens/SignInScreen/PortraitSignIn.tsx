import React, {useState} from 'react';
import {
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
import {OvalOutlinedButton} from '../../theme';
import {connect, ConnectedProps} from 'react-redux';
import {logIn, logInErr} from '../../redux/actionCreators/actionCreators';
import {connectErrState} from '../../redux/types';
import {CustomInput, OvalSolidButton, TextButton} from '../../theme';
import jwt from 'react-native-pure-jwt';

const SignIn = (props: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const signInHandl = () => {
    setLoading(true);
    const signInPromise = new Promise<string>((resolve, reject) => {
      setTimeout((): void => {
        if (
          /^[A-Za-z]+@itechart-group.com/.test(email) &&
          password === 'admin'
        ) {
          resolve(
            jwt.sign(
              {
                iss: email,
                exp: new Date().getTime() + 3600 * 1000,
                name: 'Danny',
              },
              'my-secret',
              {
                alg: 'HS256',
              },
            ),
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
    portraitRightBlock,
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
        <View style={portraitRightBlock}>
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
              <View>
                <OvalSolidButton
                  title={!loading ? 'login' : ''}
                  icon={
                    loading && (
                      <ActivityIndicator color={colors.grey} size={26} />
                    )
                  }
                  titleColor="#fff"
                  buttonColor={colors.pink}
                  onPress={signInHandl}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
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
              titleColor={colors.darkGrey}
              buttonColor={colors.darkGrey}
            />
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
    paddingHorizontal: 30,
    paddingTop: 0,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  portraitRightBlock: {
    flex: 1,
    width: '60%',
    marginRight: 25,
  },
  titleBlock: {
    alignSelf: 'flex-start',
    borderBottomColor: colors.pink,
    borderBottomWidth: 2,
    marginBottom: 15,
  },
  title: {
    fontFamily: 'SFProRounded-Bold',
    fontSize: 20,
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
    marginTop: 5,
    fontSize: 14,
  },
  bottomBlock: {
    width: '40%',
    justifyContent: 'center',
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
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 30,
  },
});

const mapState = (state: connectErrState) => ({authErr: state.auth.error});
const mapDispatch = {
  login: (token: string) => logIn(token),
  loginErr: () => logInErr(),
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

export default connector(SignIn);
