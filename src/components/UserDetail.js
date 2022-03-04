import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SIZES} from '../constants/theme';

const UserDetail = ({iconType, option, userValue, style, onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.iconView}>
          <View
            style={{
              flex: 1,
              width: SIZES.base * 8,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f7f6f8',
              borderRadius: (SIZES.base * 8) / 2,
              overflow: 'hidden',
              marginHorizontal: 3,
              marginVertical: 3,
            }}>
            <FontAwesome5
              name={iconType}
              size={SIZES.base * 4}
              style={[styles.icon, style]}
            />
          </View>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>{option}</Text>
        </View>
        <View style={styles.userValueView}>
          <Text style={styles.textDecor}>{userValue}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: SIZES.base * 3,
    marginHorizontal: SIZES.base + '%',
    maeginBottom: SIZES.base * 0.3,
  },
  container: {
    height: SIZES.base * 8.2,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    flex: 0.7,
  },
  icon: {
    color: '#9582cc',
  },
  iconGo: {
    color: '#0a090b',
  },
  textView: {
    flex: 3,
  },
  text: {
    marginHorizontal: SIZES.base * 3,
    fontFamily: 'OpenSans-Medium',
    color: '#8d8f9a',
    fontSize: SIZES.base * 2.2,
  },
  userValueView: {
    flex: 1,
    alignItems: 'center',
  },
  textDecor: {
    fontFamily: 'OpenSans-Medium',
    color: '#0a090b',
    fontSize: SIZES.base * 2,
  },
});
export default UserDetail;
