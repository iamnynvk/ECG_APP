import {View, Text} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {NAVIGATION} from '../constants/navigation';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Header
        backIcon="chevron-left"
        headerName="Profile"
        sideIcon="edit"
        backAction={() => navigation.goBack()}
        sideAction={() => navigation.navigate(NAVIGATION.EDITPROFILE)}
      />
    </View>
  );
};

export default ProfileScreen;
