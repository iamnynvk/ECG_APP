import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import {NAVIGATION} from '../constants/navigation';
import {SIZES} from '../constants/theme';
import useOrientation from '../hooks/useOrientation';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';

const EditProfileScreen = ({navigation}) => {
  const orientation = useOrientation();
  const screen = orientation.isPortrait;

  return (
    <View style={styles.container}>
      <Header
        backIcon="chevron-left"
        headerName="Profile"
        sideIcon="check-circle"
        backAction={() => navigation.goBack()}
        sideAction={() => navigation.navigate(NAVIGATION.PROFILE)}
      />

      <View style={styles.profileContainer}>
        <View style={{flex: 1}}>
          <View style={styles.imageView}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
              }}
              style={styles.images}></Image>
          </View>
          {/* here... */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f5f8',
    flex: 1,
  },
  profileContainer: {
    flex: 1,
  },
  imageView: {
    marginTop: SIZES.base * 2,
    borderWidth: 2,
    height: SIZES.base * 20,
    width: SIZES.base * 20,
    alignSelf: 'center',
    borderRadius: (SIZES.base * 20) / 2,
    overflow: 'hidden',
    borderColor: '#352859',
  },
  images: {
    height: SIZES.base * 20,
    width: SIZES.base * 20,
    alignSelf: 'center',
    borderRadius: (SIZES.base * 20) / 2,
  },
});

export default EditProfileScreen;
