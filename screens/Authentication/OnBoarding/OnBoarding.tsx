import React from 'react';
import Animated, { multiply } from 'react-native-reanimated';

import { useTheme } from 'react-native-paper';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useScrollHandler } from 'react-native-redash';

import slides from './SlideData';
import Slide from './Slide';
import SlideNavigator from './SlideNavigator';

const { height, width } = Dimensions.get('window');

const Onboarding = () => {
  const {
    colors: { background: white }
  } = useTheme();
  const scroll = React.useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();

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
        <View
          style={[
            styles.footerContent
            // { transform: [{ translateX: multiply(x, -1) }] }
          ]}
        >
          {slides.map((_, _index) => (
            <SlideNavigator
              onPress={() => console.log('pressed')}
              key={_index}
              last={slides.length === -1}
              first={_index === 0}
            />
          ))}
        </View>
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
    flex: 1
  },
  footerContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'cyan'
    // flex: 1,
  }
});
