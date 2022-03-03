import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../constants/navigation';

// Screens
import LoginScreen from './../screen/LoginScreen';
import DashboardScreen from '../screen/DashboardScreen';
import ECGRecords from '../screen/ECGRecords';
import ProfileScreen from '../screen/ProfileScreen';
import EditProfile from '../screen/EditProfile';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION.DASHBOARD}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NAVIGATION.LOGIN} component={LoginScreen} />
      <Stack.Screen name={NAVIGATION.DASHBOARD} component={DashboardScreen} />
      <Stack.Screen name={NAVIGATION.RECORD} component={ECGRecords} />
      <Stack.Screen name={NAVIGATION.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={NAVIGATION.EDITPROFILE} component={EditProfile} />
    </Stack.Navigator>
  );
};

export default AuthStack;
