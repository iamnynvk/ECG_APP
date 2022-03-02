import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../constants/navigation';

// Screens
import LoginScreen from './../screen/LoginScreen';
import DashboardScreen from '../screen/DashboardScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName={NAVIGATION.DASHBOARD}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NAVIGATION.LOGIN} component={LoginScreen} />
      <Stack.Screen name={NAVIGATION.DASHBOARD} component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
