import React, {FC} from 'react';
import {StyleSheet, Text, View, ImageSourcePropType} from 'react-native';
import {ListItem, Image} from 'react-native-elements';
import colors from '../colors/colors';

interface IItem {
  title: string;
  titleIcon?: ImageSourcePropType;
  subTitle: string;
  info?: string;
  amount: string;
  isBig?: boolean;
}

const getValue = (num: string, float: boolean): string => {
  if (!float) {
    return num.slice(0, num.indexOf('.', 0));
  } else {
    return num.slice(num.indexOf('.', 0) + 1, num.length);
  }
};

export const CashCardItem: FC<IItem> = ({
  title,
  titleIcon,
  subTitle,
  info,
  amount,
  isBig,
}) => {
  const {
    containerStyle,
    itemStyle,
    leftContentStyle,
    rightContentStyle,
    titleStyle,
    iconStyle,
    subTitleStyle,
    amountBigStyle,
    amountSmallStyle,
    infoTextStyle,
  } = styles;
  return (
    <ListItem containerStyle={[containerStyle, isBig && {height: 100}]}>
      <ListItem.Content>
        <View style={itemStyle}>
          <View style={leftContentStyle}>
            <ListItem.Title style={titleStyle}>
              {title}
              {titleIcon && <Image source={titleIcon} style={iconStyle} />}
            </ListItem.Title>
            <ListItem.Subtitle style={subTitleStyle}>
              {subTitle}
            </ListItem.Subtitle>
          </View>
          <View style={rightContentStyle}>
            <Text style={amountBigStyle}>
              ${getValue(amount, false)}.
              <Text style={amountSmallStyle}>{getValue(amount, true)}</Text>
            </Text>
            <ListItem.Chevron size={24} color={colors.pink} />
          </View>
        </View>
        {info && <Text style={infoTextStyle}>{info}</Text>}
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: 10,
    paddingRight: 10,
    borderRadius: 7,
  },
  itemStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContentStyle: {
    maxWidth: '65%',
  },
  rightContentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    fontFamily: 'SFProRounded-Regular',
    fontSize: 17,
    lineHeight: 17,
    color: colors.darkGrey,
    marginBottom: 7,
  },
  iconStyle: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  subTitleStyle: {
    fontFamily: 'SFProRounded-Light',
    fontSize: 15,
    lineHeight: 15,
    color: colors.grey,
  },
  amountBigStyle: {
    fontFamily: 'SFProRounded-Regular',
    fontSize: 21,
    lineHeight: 21,
    color: colors.darkGrey,
  },
  amountSmallStyle: {
    fontFamily: 'SFProRounded-Regular',
    fontSize: 17,
    color: colors.darkGrey,
  },
  infoTextStyle: {
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'center',
    color: colors.green,
  },
});
