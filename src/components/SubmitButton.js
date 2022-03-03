import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SIZES} from '../constants/theme';
import {en} from '../localization/en';

const SubmitButton = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.childContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#534284',
    height: SIZES.height * 0.06,
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: SIZES.height * 0.05,
  },
  childContainer: {
    height: SIZES.height * 0.06,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'OpenSans-Bold',
  },
});

export default SubmitButton;
