import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Providers from './src/navigation/';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "EventEmitter.removeListener('change', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`.",
  'If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation',
]);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Providers />;
};

export default App;
