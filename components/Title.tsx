import React, {FC} from 'react';
import {ReactNode} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import LogoImage from '../Assets/Images/logo.png';

interface ITitle {
  title?: string;
  subTitle?: string;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

export const Title: FC<ITitle> = ({title, subTitle}) => {
  const {main, image, titleStyle, subTitleStyle} = styles;

  const renderTitle = (): ReactNode => {
    if (subTitle) {
      return (
        <View style={main}>
          <Text style={titleStyle}>{title}</Text>
          <Text style={subTitleStyle}>{subTitle}</Text>
        </View>
      );
    } else {
      return <Text style={titleStyle}>{title}</Text>;
    }
  };
  const renderLogo = (): ReactNode => {
    return <Image source={LogoImage} style={image} />;
  };

  return <View>{title ? renderTitle() : renderLogo()}</View>;
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 5,
    width: SCREEN_WIDTH > 576 ? 200 : 100,
    height: SCREEN_WIDTH > 576 ? 80 : 50,
  },
  titleStyle: {
    marginTop: 5,
    color: '#fff',
    fontSize: SCREEN_WIDTH > 576 ? 28 : 18,
  },
  subTitleStyle: {
    color: '#fff',
    fontSize: SCREEN_WIDTH > 576 ? 16 : 10,
  },
});
