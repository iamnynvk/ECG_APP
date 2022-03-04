import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {NAVIGATION} from '../constants/navigation';
import useOrientation from '../hooks/useOrientation';
import {SIZES} from '../constants/theme';
import {en} from '../localization/en';
import SubmitButton from '../components/SubmitButton';
import UserDetail from '../components/UserDetail';

const ProfileScreen = ({navigation}) => {
  const orientation = useOrientation();
  const screen = orientation.isPortrait;

  return (
    <View style={styles.container}>
      <Header
        backIcon="chevron-left"
        headerName="Profile"
        sideIcon="edit"
        backAction={() => navigation.goBack()}
        sideAction={() => navigation.navigate(NAVIGATION.EDITPROFILE)}
      />

      <View
        style={[
          styles.profileContainer,
          {flexDirection: screen ? 'column' : 'row'},
        ]}>
        <View style={{flex: 1}}>
          <View style={styles.imageView}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
              }}
              style={styles.images}
            />
          </View>

          <View style={styles.textView}>
            <Text style={styles.textName}>{en.profile.name}</Text>
            <Text style={styles.textEmail}>{en.profile.email}</Text>
          </View>
        </View>

        <View
          style={[
            styles.detailContainer,
            {
              borderTopRightRadius: screen ? SIZES.padding : 0,
              borderBottomLeftRadius: screen ? 0 : SIZES.padding,
            },
          ]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <UserDetail
                iconType="user-friends"
                option="Gender"
                userValue="Male"
              />

              <UserDetail iconType="venus" option="Age" userValue="29" />

              <UserDetail
                iconType="phone"
                option="Gender"
                userValue="Male"
                style={{transform: [{rotate: '90deg'}]}}
              />
            </View>
          </ScrollView>

          <View style={styles.liveButtonView}>
            <SubmitButton
              title={en.profile.logout}
              onPress={() => {
                navigation.replace(NAVIGATION.LOGIN);
              }}
            />
          </View>
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
  textView: {
    alignItems: 'center',
    marginTop: SIZES.base * 1,
  },
  textName: {
    fontFamily: 'OpenSans-Medium',
    fontSize: SIZES.base * 2.5,
    color: '#0a090b',
  },
  textEmail: {
    fontFamily: 'OpenSans-Regular',
    color: '#0a090b',
  },
  detailContainer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: SIZES.padding,
  },
  liveButtonView: {
    marginHorizontal: SIZES.base + '%',
    marginVertical: '-5%',
  },
});

export default ProfileScreen;
