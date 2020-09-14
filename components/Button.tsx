import * as React from 'react';
import { useTheme, Button as RectButton, Text } from 'react-native-paper';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'black' | 'primary' | 'bordered' | 'light';
  style?: ViewStyle;
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
export const Button = ({
  label,
  onPress,
  variant = 'light',
  style = {}
}: ButtonProps) => {
  const { colors } = useTheme();

  const BG =
    variant === 'primary'
      ? colors.primary
      : variant === 'black'
      ? colors.b[100]
      : variant === 'bordered'
      ? 'transparent'
      : colors.p[10];
  const TEXT =
    variant === 'primary'
      ? colors.background
      : variant === 'black'
      ? colors.background
      : variant === 'bordered'
      ? colors.primary
      : colors.b[75];

  return (
    <RectButton
      style={[
        styles.container,
        {
          backgroundColor: BG,
          ...style
        }
      ]}
      {...{ onPress, variant }}
      contentStyle={[styles.contentStyle]}
      color={TEXT}
    >
      {label}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: `Poppins-SemiBold`,
    borderRadius: 25,
    fontSize: 16
  },
  contentStyle: {
    height: 50
  }
});
