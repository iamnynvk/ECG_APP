import React, {forwardRef} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SIZES} from '../constants/theme';

const LabelTextInput = forwardRef((props, ref) => {
  const {
    label,
    value,
    keyboard,
    onchange,
    style,
    onBlur,
    onSubmitEditing,
    ...rest
  } = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.label, style]}>{label}</Text>
      <TextInput
        ref={ref}
        value={value}
        onChangeText={onchange}
        keyboardType={keyboard}
        onBlur={onBlur}
        autoCorrect={true}
        onSubmitEditing={onSubmitEditing}
        style={styles.textinput}
        {...rest}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
  label: {
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.base * 2,
  },
  textinput: {
    borderBottomWidth: 1,
    borderColor: '#c2c1c9',
    fontFamily: 'OpenSans-Medium',
  },
});

export default LabelTextInput;
