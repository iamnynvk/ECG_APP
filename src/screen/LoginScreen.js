import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import images from '../constants/images';
import {en} from '../localization/en';
import {SIZES} from '../constants/theme';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import Error from '../components/Error';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NAVIGATION} from '../constants/navigation';
import useOrientation from '../hooks/useOrientation';

const LoginScreen = ({navigation}) => {
  // State here...
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Hook for Screen Orientation
  const orientation = useOrientation();
  let screen = orientation.isPortrait;

  // Refs here...
  const InputRef = useRef();

  // On Submit handler here...
  const submitButtonHandler = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setEmailError(en.login.emailError);
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError(en.login.passwordError);
    } else {
      setPasswordError('');
    }

    if (reg.test(email) === true && password !== '') {
      // Navigate to Dashboard
      navigation.replace(NAVIGATION.DASHBOARD);
    }
  };

  return (
    <View
      style={[styles.container, {flexDirection: screen ? 'column' : 'row'}]}>
      {/* Header Top */}
      <View style={styles.headerTopView}>
        <Image
          source={images.logos}
          style={[
            styles.headerlogo,
            {
              width: screen ? SIZES.base * 15 : SIZES.base * 13,
              height: screen ? SIZES.base * 13 : SIZES.base * 9,
            },
          ]}
        />
        <Text style={styles.headertext}>{en.common.ECG}</Text>
      </View>
      <View
        style={[
          styles.loginView,
          {
            borderTopRightRadius: screen ? SIZES.padding : 0,
            borderBottomLeftRadius: screen ? 0 : SIZES.padding,
          },
        ]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* gretting text */}
          <View
            style={[
              styles.MainLoginView,
              {marginVertical: screen ? '8%' : '5%'},
            ]}>
            <View>
              <Text style={styles.welcomeText}>{en.login.welcome}</Text>
              <Text style={styles.continueText}>{en.login.continue}</Text>
            </View>

            {/* Login Form */}
            <View>
              <InputForm
                values={email}
                onChangeTexts={text => setEmail(text)}
                icons="user"
                iconSize={25}
                placeholders="Email"
                keyboardType="email-address"
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  InputRef.current.focus();
                }}
                autoFocus={true}
              />

              <Error error={emailError} />

              <InputForm
                ref={InputRef}
                values={password}
                onChangeTexts={text => setPassword(text)}
                icons="lock"
                iconSize={25}
                placeholders="Password"
                keyboardType="default"
                returnKeyType={'done'}
              />
              <Error error={passwordError} />
            </View>

            {/* Button Submit */}
            <View>
              <SubmitButton
                title={en.login.login}
                onPress={submitButtonHandler}
              />
            </View>

            {/* Forgot Password */}
            <View style={styles.forgotView}>
              <TouchableOpacity>
                <Text style={styles.forgotText}>{en.login.forgotpassword}</Text>
              </TouchableOpacity>
            </View>

            {/* Sign Up */}
            <View style={styles.signupView}>
              <TouchableOpacity>
                <View style={styles.signupButtonView}>
                  <Text style={styles.buttonText}>{en.login.Signup}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#534284',
  },
  headerTopView: {
    flex: 1,
    justifyContent: 'center',
  },
  headerlogo: {
    alignSelf: 'center',
  },
  headertext: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    marginVertical: SIZES.height * 0.01,
    fontFamily: 'OpenSans-Bold',
  },
  loginView: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: SIZES.padding,
  },
  MainLoginView: {
    marginHorizontal: SIZES.base + '%',
  },
  welcomeText: {
    fontSize: SIZES.base * 2.5,
    fontFamily: 'OpenSans-Bold',
    color: 'black',
  },
  continueText: {
    fontSize: SIZES.base * 1.8,
    fontFamily: 'OpenSans-Medium',
    marginTop: SIZES.base * 1,
  },
  forgotView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotText: {
    fontFamily: 'OpenSans-Regular',
    color: '#534284',
  },
  signupView: {
    marginTop: SIZES.base * 5,
  },
  signupButtonView: {
    borderWidth: 1,
    borderColor: '#534284',
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZES.base * 6,
    borderRadius: 10,
  },
  buttonText: {
    color: '#534284',
    fontFamily: 'OpenSans-Medium',
  },
});

export default LoginScreen;
