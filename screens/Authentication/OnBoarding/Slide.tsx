import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View
} from 'react-native';
import { Text } from '../../../components';

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
      <Text variant="title2" style={styles.title}>
        {title}
      </Text>
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
    textAlign: 'center'
  }
});
