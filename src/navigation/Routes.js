import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import useOrientation from '../hooks/useOrientation';

const Routes = () => {
  const orientation = useOrientation();
  const screen = orientation.isPortrait;

  return (
    <NavigationContainer>
      {/*  */}
      {screen ? (
        <StatusBar backgroundColor="#534284" barStyle="light-content" />
      ) : (
        <StatusBar hidden />
      )}

      <AuthStack />
    </NavigationContainer>
  );
};

export default Routes;
