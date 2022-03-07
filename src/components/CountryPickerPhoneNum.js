import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SIZES} from '../constants/theme';
import PhoneInput from 'react-native-phone-number-input';

const countryPickerPhoneNum = props => {
  const {label, value, onChange} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <PhoneInput
        defaultValue={value}
        defaultCode="IN"
        onChangeFormattedText={onChange}
        containerStyle={styles.contentNumber}
        textContainerStyle={styles.inputNumber}
        countryPickerButtonStyle={styles.countryPickerButton}
        textInputStyle={styles.numberStyles}
        codeTextStyle={styles.numberStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.base * 3,
  },
  label: {
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.base * 2,
  },
  contentNumber: {
    marginTop: SIZES.base * 1,
    width: '100%',
  },
  inputNumber: {
    backgroundColor: '#fff',
    paddingVertical: 0,
    borderBottomWidth: 1,
    borderColor: '#c2c1c9',
  },
  countryPickerButton: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#c2c1c9',
    fontFamily: 'OpenSans-Medium',
    marginRight: 10,
  },
  numberStyles: {
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.base * 1.8,
  },
});

export default countryPickerPhoneNum;
