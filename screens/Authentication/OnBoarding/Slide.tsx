import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View
} from 'react-native';
import { Subheading, useTheme } from 'react-native-paper';

interface SlideProps {
  title: string;
  inverted?: boolean;
  picture: ImageSourcePropType;
}

const { width, height } = Dimensions.get('window');

const Slide = ({
  title,
  inverted,
  picture = require('../../../assets/images/illustrations/1.png')
}: SlideProps) => {
  const { colors } = useTheme();
  const color = colors.b[50];

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: inverted ? 'column-reverse' : 'column'
        }
      ]}
    >
      <Image
        source={picture}
        style={{
          marginBottom: !inverted ? 60 : 0,
          marginTop: inverted ? 60 : 0
        }}
      />
      <Subheading style={[styles.title, { color }]}>{title}</Subheading>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width,
    padding: 40,
    paddingTop: 67
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium'
  }
});
