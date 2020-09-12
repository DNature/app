// import { backgroundColor, useTheme } from '@shopify/restyle';
// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import Animated from 'react-native-reanimated';

// import { Text, Theme } from '../../../theme';

// const Onboarding = () => {
//   const theme = useTheme<Theme>();
//   const { white } = theme.colors;
//   return (
//     <View style={[styles.container, { backgroundColor: white }]}>
//       <Text color="p-100" variant="primary">
//         Tab One
//       </Text>

//       <Text color="b-75">This is the onBoarding component</Text>
//     </View>
//   );
// };

// export default Onboarding;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20
//   }
// });

import React from 'react';
import Animated from 'react-native-reanimated';

import { useTheme } from '@shopify/restyle';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Text, Theme } from '../../../theme';
import slides from './SlideData';
import { ScrollView } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

const Onboarding = () => {
  const theme = useTheme<Theme>();
  const scroll = React.useRef<Animated.ScrollView>(null);

  const { white } = theme.colors;

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <View style={styles.slider}>
        <ScrollView>
          {slides.map(({ title }, _index) => (
            <View key={_index}>
              <Text color="b-50">{title}</Text>
            </View>
          ))}
        </ScrollView>
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
