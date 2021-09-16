import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {SignedApp} from '../screens';
import SignIn from '../screens/SignInScreen';
import {connectAuthState} from '../Redux/types';

const Navigator = (props: Props) => {
  const renderScreen = () => {
    if (props.JWT) {
      return <SignedApp />;
    } else {
      return <SignIn />;
    }
  };

  return renderScreen();
};

const mapState = (state: connectAuthState) => ({JWT: state.auth.jwt});

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;

export default connector(Navigator);
