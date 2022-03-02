import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES} from '../constants/theme';

const Error = ({error}) => {
  return (
    <View style={styles.errorView}>
      <Text style={styles.errors}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorView: {
    marginStart: SIZES.width * 0.02,
    marginTop: SIZES.height * 0.005,
  },
  errors: {
    color: 'red',
    fontFamily: 'OpenSans-Light',
    fontSize: SIZES.font * 0.9,
  },
});

export default Error;
