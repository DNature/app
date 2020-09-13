import * as React from 'react';
import { useTheme, Button as RectButton, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

interface ButtonProps {
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
  const { colors } = useTheme();

  const BG =
    variant === 'primary'
      ? colors.primary
      : variant === 'black'
      ? colors.b[75]
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
          backgroundColor: BG
        }
      ]}
      {...{ onPress, variant }}
    >
      <Text
        style={{
          fontFamily: `Poppins-SemiBold`,
          textAlign: 'center',
          color: TEXT
        }}
      >
        {label}
      </Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {}
});
