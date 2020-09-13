import React from 'react';
import Animated from 'react-native-reanimated';

import { useTheme } from '@shopify/restyle';
import { Dimensions, StyleSheet, View } from 'react-native';

import slides from './SlideData';
import Slide from './Slide';
import { Theme } from '../../../theme';

const { height, width } = Dimensions.get('window');

const Onboarding = () => {
  const theme = useTheme<Theme>();
  const scroll = React.useRef<Animated.ScrollView>(null);

  const { white } = theme.colors;

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <View style={styles.slider}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          ref={scroll}
        >
          {slides.map(({ title, picture }, _index) => (
            <Slide
              key={_index}
              {...{ title, picture, inverted: !!(_index % 2) }}
            />
          ))}
        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  slider: {
    height
  }
});
