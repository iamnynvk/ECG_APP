import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SIZES} from '../constants/theme';

const SectionOption = ({iconType, option, goIcon, onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress}>
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
                style={styles.icon}
              />
            </View>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>{option}</Text>
          </View>
          <View style={styles.iconActionView}>
            <FontAwesome5
              name={goIcon}
              size={SIZES.base * 3}
              style={styles.iconGo}
            />
          </View>
        </View>
      </TouchableOpacity>
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
    color: '#1b1a21',
    fontSize: SIZES.base * 2.2,
  },
  iconActionView: {
    flex: 0.2,
  },
});

export default SectionOption;
