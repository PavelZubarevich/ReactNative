import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import AlbomSignIn from './AlbomSignIn';
import PortraitSignIn from './PortraitSignIn';

export const SignIn = () => {
  const [isPortrait, serPortrait] = useState<boolean>(true);

  const checkPortrait = () => {
    serPortrait(
      Dimensions.get('window').width > Dimensions.get('window').height,
    );
  };

  useEffect(() => {
    const listener = Dimensions.addEventListener('change', checkPortrait);
    return () => listener.remove();
  }, []);

  return isPortrait && Dimensions.get('window').height < 550 ? (
    <PortraitSignIn />
  ) : (
    <AlbomSignIn />
  );
};
