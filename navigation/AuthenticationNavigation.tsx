import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/Authentication/OnBoarding';

const AuthenticationStack = createStackNavigator();

export const AuthenticationStackNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="onBoarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
);
