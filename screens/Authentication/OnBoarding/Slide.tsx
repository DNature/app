import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Text } from '../../../theme';

interface SlideProps {
  title: string;
  inverted?: boolean;
  picture?: string;
}

const { width } = Dimensions.get('window');

const Slide = ({ title }: SlideProps) => {
  return (
    <View>
      <Text variant="primary">{title}</Text>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width
  }
});
