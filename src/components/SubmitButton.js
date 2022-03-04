import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SIZES} from '../constants/theme';

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
    height: SIZES.base * 6,
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: SIZES.base * 4,
  },
  childContainer: {
    height: SIZES.base * 6,
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
