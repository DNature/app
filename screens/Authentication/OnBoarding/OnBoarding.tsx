import React from 'react';
import Animated, { multiply } from 'react-native-reanimated';

import { useTheme } from '@shopify/restyle';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useScrollHandler } from 'react-native-redash';

import slides from './SlideData';
import Slide from './Slide';
import { Theme } from '../../../theme';
import { Button } from '../../../components';

const { height, width } = Dimensions.get('window');

const Onboarding = () => {
  const theme = useTheme<Theme>();
  const scroll = React.useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
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
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, _index) => (
            <Slide
              key={_index}
              {...{ title, picture, inverted: !!(_index % 2) }}
            />
          ))}
        </Animated.ScrollView>
      </View>
      <View style={styles.footer}>
        <Animated.View
          style={[
            styles.footerContent,
            { transform: [{ translateX: multiply(x, -1) }] }
          ]}
        >
          {slides.map((_, _index) => (
            <Button
              onPress={() => console.log('pressed')}
              key={_index}
              label="next"
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  slider: {
    // height
  },
  footer: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1
    // backgroundColor: 'cyan'
  },
  footerContent: {
    flexDirection: 'row'
    // flex: 1,
  }
});
