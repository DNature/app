import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationStackNavigator } from './AuthenticationNavigation';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

export default function Navigation() {
  return (
    <NavigationContainer>
      <AuthenticationStackNavigator />
    </NavigationContainer>
  );
}
