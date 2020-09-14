import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Animated from 'react-native-reanimated';

import { Button } from '../../../components';

const { height, width } = Dimensions.get('window');

interface SlideNavigatorProps {
  x: Animated.Value<number>;
  length: number;
  index: number;
  scroll: React.RefObject<Animated.ScrollView>;
}

const SlideNavigator = ({ x, length, scroll, index }: SlideNavigatorProps) => {
  const last = index === length - 1;
  const first = index === 0;

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      {!last ? (
        <View style={styles.navContainer}>
          <Button
            variant="light"
            label={first ? 'Skip' : 'Back'}
            style={styles.borderLeft}
            onPress={() => {
              if (scroll.current) {
                if (first) {
                  scroll.current
                    .getNode()
                    .scrollTo({ x: width * (index + length - 1) });
                } else {
                  scroll.current.getNode().scrollTo({ x: width * (index - 1) });
                }
              }
            }}
          />
          <Button
            style={styles.borderRight}
            variant="black"
            label={'Next'}
            onPress={() => {
              if (scroll.current) {
                scroll.current.getNode().scrollTo({ x: width * (index + 1) });
              }
            }}
          />
        </View>
      ) : (
        <View style={styles.getStarted}>
          <Button
            // style={styles.borderRight}
            variant="primary"
            label={'Get started'}
            onPress={() => {
              if (scroll.current) {
                scroll.current.getNode().scrollTo({ x: width * (index + 1) });
              }
            }}
          />
          <Text style={[styles.text]}>
            <Text>Looking additional income?</Text>
            <Text
              style={{
                color: colors.primary,
                fontWeight: 'bold',
                textDecorationLine: 'underline'
              }}
            >
              {' '}
              Become a shopper
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

export default SlideNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    alignSelf: 'flex-end',
    backgroundColor: 'blue'
  },
  navContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  borderLeft: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: 79
  },
  borderRight: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    width: 145
  },
  getStarted: {
    paddingHorizontal: 40
  },
  text: {
    marginTop: 30,
    textAlign: 'center'
  }
});
