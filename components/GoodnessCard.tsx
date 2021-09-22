import React, {FC, useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card, Image} from 'react-native-elements';
import colors from '../colors/colors';
import {OvalSolidButton} from '../theme';
import Icon from 'react-native-vector-icons/Entypo';
import {ImageSource} from 'react-native-vector-icons/Icon';
import Video from 'react-native-video';

interface ICard {
  imageSource: ImageSource;
  videoSource?: string;
}

export const GoodnessCard: FC<ICard> = ({imageSource, videoSource}) => {
  const {
    containerStyle,
    headerStyle,
    titleImage,
    titleBlock,
    titleStyle,
    subTitleStyle,
    imageStyle,
    textStyle,
    btnStyle,
    btnIcon,
    btnTitleStyle,
  } = styles;
  return (
    <Card containerStyle={containerStyle}>
      <View style={headerStyle}>
        <Image
          source={require('../Assets/Images/avatar.png')}
          style={titleImage}
        />
        <View style={titleBlock}>
          <Text style={titleStyle}>Your Giving impact</Text>
          <Text style={subTitleStyle}>
            St Jude
            <Icon name="dot-single" size={13} color={colors.pink} />4 hrs ago
          </Text>
        </View>
      </View>
      <Card.Image source={imageSource} style={imageStyle} />
      {/* {videoSource && (
        <Video
          paused
          source={{
            uri: `${videoSource}`,
          }}
          controls={true}
          style={imageStyle}
        />
      )} */}

      <Text style={textStyle}>
        Danny, Your donation helped 5 amazing kids get much needed cancer
        surgery, thanks for being amazing!
      </Text>
      <View style={btnStyle}>
        <OvalSolidButton
          title="Share to spread the world"
          titleStyle={btnTitleStyle}
          buttonColor={colors.pink}
          icon={
            <Image
              source={require('../Assets/Images/shareArrow.png')}
              style={btnIcon}
            />
          }
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 7,
    borderWidth: 0,
    marginHorizontal: 0,
    paddingHorizontal: 0,
    paddingVertical: 12,
    marginTop: 0,
    marginBottom: 20,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  titleImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  titleBlock: {
    maxWidth: '90%',
  },
  titleStyle: {
    fontFamily: 'SFProRounded-Regular',
    fontSize: 16,
    lineHeight: 16,
    color: colors.darkGrey,
    textTransform: 'capitalize',
    marginBottom: 7,
  },
  subTitleStyle: {
    fontFamily: 'SFProRounded-Light',
    fontSize: 14,
    lineHeight: 14,
    color: colors.grey,
  },
  imageStyle: {
    height: 170,
    marginBottom: 10,
  },
  textStyle: {
    fontFamily: 'SFProRounded-Regular',
    fontSize: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  btnStyle: {
    alignSelf: 'center',
    width: '70%',
  },
  btnIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  btnTitleStyle: {
    textTransform: 'none',
    fontFamily: 'SFProRounded-Regular',
    fontSize: 14,
  },
});
