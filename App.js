import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Providers from './src/navigation/';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Providers />;
};

export default App;
