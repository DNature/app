import AsyncStorage from '@react-native-community/async-storage';
import { InitialState, NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

import { AppLoading } from 'expo';
import { FontSource, useLoadAssets } from '../hooks';

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`;

interface LoadAssetsProps {
  fonts?: FontSource;
  assets?: number[];
  children: React.ReactElement | React.ReactElement[];
}

export const LoadAssets = ({ assets, fonts, children }: LoadAssetsProps) => {
  const [isNavigationReady, setIsNavigationReady] = React.useState(!__DEV__);
  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >();
  const ready = useLoadAssets(assets || [], fonts || {});

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        SplashScreen.preventAutoHideAsync();
        const saveStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY
        );
        const state = saveStateString ? JSON.parse(saveStateString) : undefined;
        setInitialState(state);
      } catch (err) {
        console.warn(err);
      } finally {
        setIsNavigationReady(true);
        SplashScreen.hideAsync();
      }
    };

    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);

  const onStateChange = React.useCallback((state) => {
    AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state));
  }, []);

  if (!ready || !isNavigationReady) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer {...{ onStateChange, initialState }}>
      {children}
    </NavigationContainer>
  );
};
