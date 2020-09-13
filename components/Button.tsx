import * as React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { useTheme } from '@shopify/restyle';
import { StyleSheet, View } from 'react-native';

import { Text } from './Text';
import { Theme } from '../theme';

interface ButtonProps extends RectButtonProperties {
  label: string;
  onPress: () => void;
  variant?: 'black' | 'primary' | 'bordered' | 'light';
}

/*
primary: {
      backgroundColor: 'p-100',
      padding: 'btn',
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      borderRadius: 'radius'
    }
 */
export const Button = ({ label, onPress, variant = 'light' }: ButtonProps) => {
  const { colors, spacing } = useTheme<Theme>();

  const BG =
    variant === 'primary'
      ? colors['p-100']
      : variant === 'black'
      ? colors['b-75']
      : variant === 'bordered'
      ? 'transparent'
      : colors['p-10'];
  const TEXT =
    variant === 'primary'
      ? colors['white']
      : variant === 'black'
      ? colors['white']
      : variant === 'bordered'
      ? colors['p-100']
      : colors['b-75'];

  return (
    <RectButton
      style={[
        styles.container,
        {
          backgroundColor: BG,
          borderRadius: spacing.radius,
          padding: spacing.padding
        }
      ]}
      {...{ onPress, variant }}
    >
      <View accessible style={{ borderRadius: 25 }}>
        <Text
          style={{
            fontFamily: `Poppins-SemiBold`,
            textAlign: 'center',
            fontSize: spacing.m,
            color: TEXT
          }}
        >
          {label}
        </Text>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {}
});
