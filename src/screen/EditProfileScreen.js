import React, {useState, useRef, createRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import {NAVIGATION} from '../constants/navigation';
import {SIZES} from '../constants/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useOrientation from '../hooks/useOrientation';
import ImagePicker from 'react-native-image-crop-picker';
import LabelTextInput from '../components/LabelTextInput';
import CountryPickerPhoneNum from '../components/CountryPickerPhoneNum';
import {RadioButton} from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {useBackHandler} from '../hooks/useBackHandler';

const EditProfileScreen = ({navigation}) => {
  // State here..
  const [data, setData] = useState({
    imageUrl: {
      value:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
      error: '',
      isValid: false,
    },
    firstName: {value: '', error: '', isValid: false},
    lastName: {value: '', error: '', isValid: false},
    email: {value: '', error: '', isValid: false},
    dob: {value: '', error: '', isValid: false},
    contact: {value: '9510926768', error: '', isValid: false},
  });

  const [checked, setChecked] = React.useState('male');

  const lnameRef = useRef();
  const emailRef = useRef();
  const dobRef = useRef();
  const sheetRef = useRef(null);
  const fall = new Animated.Value(1);

  const orientation = useOrientation();
  const screen = orientation.isPortrait;

  // Back Button Clicked to Close BottomSheet
  useBackHandler(() => {
    if (bs.current.snapTo != 0) {
      bs.current.snapTo(1);
      NavigationService.goBack();
      return true;
    }
    return false;
  });

  // // Camera Open Action
  const OpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      console.log(image);

      const imageUri =
        Platform.OS === 'ios' ? image.replace('file://', '') : image.path;

      console.log('Image URI :', imageUri);
      setData({
        ...data,
        imageUrl: {
          ...data.imageUrl,
          value: imageUri,
          isValid: true,
        },
      });
    });
  };

  // Open Galary action

  const renderHeader = () => (
    <View style={styles.headerView}>
      <View style={styles.pannelHeader}>
        <View style={styles.pannelView}></View>
      </View>
    </View>
  );

  const renderContent = () => (
    <View style={styles.bsHeaderView}>
      <View>
        <Text style={styles.bsHeaderTitle}>Upload Photo</Text>
        <Text style={styles.bsHeaderDesc}>Choose Your Profile Picture</Text>
      </View>

      <View style={styles.bsHeaderButtonMainView}>
        <TouchableOpacity onPress={OpenCamera}>
          <View style={styles.bsHeaderButtonView}>
            <Text style={styles.bsButtonText}>Take Photo</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={[styles.bsHeaderButtonView, {marginTop: SIZES.base * 2}]}>
            <Text style={styles.bsButtonText}>Choose From Library</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => sheetRef.current.snapTo(1)}>
          <View
            style={[styles.bsHeaderButtonView, {marginTop: SIZES.base * 2}]}>
            <Text style={styles.bsButtonText}>Cancel</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Validation Process
  const firstNameValidation = () => {};

  const lastNameValidation = () => {};

  const emailValidation = () => {};

  const dobValidation = () => {};

  const contactValidation = () => {};

  return (
    <View style={styles.mainContainer}>
      <Header
        backIcon="chevron-left"
        headerName="Profile"
        sideIcon="check-circle"
        backAction={() => navigation.goBack()}
        sideAction={() => navigation.navigate(NAVIGATION.PROFILE)}
      />

      <BottomSheet
        ref={sheetRef}
        snapPoints={[350, 0]}
        borderRadius={10}
        renderContent={renderContent}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />

      <Animated.View
        style={[
          styles.container,
          {
            flexDirection: screen ? 'column' : 'row',
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          },
        ]}>
        <View style={styles.profileContainer}>
          <View style={{flex: 1}}>
            <View
              style={{
                // alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                // borderWidth: 1,
              }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity
                  onPress={() => {
                    sheetRef.current.snapTo(0);
                  }}>
                  <View style={styles.ProfileImageView}>
                    <Image
                      source={{uri: data.imageUrl.value}}
                      style={styles.imageStyle}
                      resizeMode="center"
                    />
                  </View>

                  <View style={styles.pencilView}>
                    <FontAwesome5 name="pencil-alt" size={20} color="#fff" />
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
        {/* User Detail Edit Here */}
        <View
          style={[
            styles.detailMainView,
            {
              borderTopLeftRadius: screen ? SIZES.padding : SIZES.padding,
              borderTopRightRadius: screen ? SIZES.padding : 0,
              borderBottomLeftRadius: screen ? 0 : SIZES.padding,
            },
          ]}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View style={styles.textEditFieldView}>
              <LabelTextInput
                label="First Name"
                keyboard="default"
                onBlur={firstNameValidation}
                onSubmitEditing={() => {
                  lnameRef.current.focus();
                }}
                value={data.firstName.value}
                onchange={text =>
                  setData({
                    ...data,
                    firstName: {
                      value: text,
                    },
                  })
                }
              />

              <LabelTextInput
                ref={lnameRef}
                label="Last Name"
                keyboard="default"
                onBlur={lastNameValidation}
                value={data.lastName.value}
                onSubmitEditing={() => {
                  emailRef.current.focus();
                }}
                onchange={text =>
                  setData({
                    ...data,
                    lastName: {
                      value: text,
                    },
                  })
                }
                style={{marginTop: SIZES.base * 3}}
              />

              <LabelTextInput
                ref={emailRef}
                label="Email"
                keyboard="email-address"
                onBlur={emailValidation}
                value={data.email.value}
                onSubmitEditing={() => {
                  dobRef.current.focus();
                }}
                onchange={text =>
                  setData({
                    ...data,
                    email: {
                      value: text,
                    },
                  })
                }
                style={{marginTop: SIZES.base * 3}}
              />

              <LabelTextInput
                ref={dobRef}
                label="DOB"
                keyboard="default"
                onBlur={dobValidation}
                value={data.dob.value}
                onchange={text =>
                  setData({
                    ...data,
                    dob: {
                      value: text,
                    },
                  })
                }
                style={{marginTop: SIZES.base * 3}}
              />

              <CountryPickerPhoneNum
                label="Contact"
                value={data.contact.value}
                onChange={text => {
                  setData({
                    ...data,
                    contact: {
                      value: text,
                    },
                  });
                }}
              />

              <View style={{marginTop: SIZES.base * 3}}>
                <Text style={styles.genderTextView}>Gender</Text>
                <View style={styles.genderButtonMainView}>
                  <View style={{flexDirection: 'row'}}>
                    <RadioButton
                      value="male"
                      color="#36295c"
                      status={checked === 'male' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('male')}
                    />
                    <Text style={styles.genderText}>Male</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <RadioButton
                      value="female"
                      color="#36295c"
                      status={checked === 'female' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('female')}
                    />
                    <Text style={styles.genderText}>Female</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <RadioButton
                      value="other"
                      color="#36295c"
                      status={checked === 'other' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('other')}
                    />
                    <Text style={styles.genderText}>Other</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: '#f6f5f8',
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    borderWidth: 1,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    // alignContent: 'center',
    // borderWidth: 1,
  },
  ProfileImageView: {
    // width: 200,
    // height: 200,
    // borderRadius: 100,
    // overflow: 'hidden',
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 1,
    // alignSelf: 'center',
    // justifyContent: 'center',
    // width: SIZES.width * 0.3,
    // height: SIZES.width * 0.3,
    // borderWidth: 1,
  },
  imageStyle: {
    // flex: 1,
    // width: 200,
    // height: 200,
    // borderRadius: 100,
    // borderWidth: 1,
    // borderColor: '#000',
  },
  pencilView: {
    backgroundColor: '#36295c',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 3,
  },
  detailMainView: {
    flex: 2,
    backgroundColor: '#fff',
  },
  textEditFieldView: {
    marginHorizontal: SIZES.base + '%',
    marginVertical: SIZES.base + '%',
  },
  genderButtonMainView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: SIZES.base * 3,
  },
  genderTextView: {
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.base * 2,
  },
  genderText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: SIZES.base * 2,
    color: '#000',
    alignSelf: 'center',
  },
  headerView: {
    backgroundColor: '#fff',
    shadowColor: '#333333',
    shadowOffset: {
      width: -1,
      height: -3,
    },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  pannelHeader: {
    alignItems: 'center',
  },
  pannelView: {
    width: 40,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 20,
  },
  bsHeaderView: {
    backgroundColor: 'white',
    padding: 10,
    height: 300,
  },
  bsHeaderTitle: {
    fontFamily: 'OpenSans-Medium',
    color: '#000',
    fontSize: SIZES.base * 2.5,
    alignSelf: 'center',
  },
  bsHeaderDesc: {
    fontFamily: 'OpenSans-Regular',
    color: '#747473',
    fontSize: SIZES.base * 1.5,
    alignSelf: 'center',
  },
  bsHeaderButtonMainView: {
    marginHorizontal: SIZES.base * 3,
    marginTop: SIZES.base * 5,
    marginVertical: SIZES.base * 2,
  },
  bsHeaderButtonView: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9582cc',
  },
  bsButtonText: {
    color: '#fff',
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.base * 2,
  },
});

export default EditProfileScreen;
