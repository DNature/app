import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { Button } from '../../../components';

const { height, width } = Dimensions.get('window');

interface SlideNavigatorProps {
  last?: boolean;
  first?: boolean;
  onPress: () => void;
}

const SlideNavigator = ({ last, first, onPress }: SlideNavigatorProps) => {
  return (
    <View style={styles.container}>
      {!last && (
        <View style={styles.navContainer}>
          <Button
            variant="light"
            label={first ? 'Skip' : 'Back'}
            {...{ onPress }}
          />
          <Button variant="black" label={'Next'} {...{ onPress }} />
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
    alignSelf: 'flex-end'
  },
  navContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});
