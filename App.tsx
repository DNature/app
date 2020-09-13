import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation';
import { theme } from './theme';
import { LoadAssets } from './constants';

const fonts = {
  'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf')
};

export default function App() {
  return (
    <LoadAssets fonts={fonts}>
      <PaperProvider {...{ theme }}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </PaperProvider>
    </LoadAssets>
  );
}
