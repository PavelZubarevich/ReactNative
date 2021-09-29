import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Image, ImageProps} from 'react-native-elements';
import colors from '../colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IItem {
  title: string;
  titleIcon?: ImageProps;
  subTitle: string;
  amount: string;
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
  amount,
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
  } = styles;
  return (
    <ListItem containerStyle={containerStyle}>
      <ListItem.Content style={itemStyle}>
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
          <Icon name="chevron-right" size={24} color={colors.pink} />
        </View>
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
});
