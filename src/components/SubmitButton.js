import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SIZES} from '../constants/theme';
import {en} from '../localization/en';

const SubmitButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>{en.login.login}</Text>
      </View>
    </TouchableOpacity>
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
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'OpenSans-Bold',
  },
});

export default SubmitButton;
