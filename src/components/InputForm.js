import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SIZES} from '../constants/theme';

const InputForm = React.forwardRef((props, ref) => {
  const {
    values,
    onChangeTexts,
    placeholders,
    icons,
    iconSize,
    keyboardType,
    returnKeyType,
    onSubmitEditing,
    ...rest
  } = props;

  return (
    <View style={styles.container}>
      {/* icons here */}
      <View style={styles.iconView}>
        <FontAwesome5 name={icons} size={iconSize} color={'#000'} />
      </View>

      {/* input field here */}
      <View style={styles.inputView}>
        <TextInput
          ref={ref}
          value={values}
          onChangeText={onChangeTexts}
          style={styles.input}
          placeholder={placeholders}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={true}
          {...rest}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: SIZES.height * 0.03,
    borderWidth: 1,
    borderRadius: 10,
  },
  iconView: {
    marginHorizontal: SIZES.height * 0.01,
    justifyContent: 'center',
    borderRightWidth: 1,
    padding: 5,
    alignSelf: 'center',
  },
  inputView: {
    flex: 1,
  },
  input: {
    fontFamily: 'OpenSans-Medium',
  },
});

export default InputForm;
