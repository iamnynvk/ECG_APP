import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#534284" barStyle="light-content" />
      <AuthStack />
    </NavigationContainer>
  );
};

export default Routes;
