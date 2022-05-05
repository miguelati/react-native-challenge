import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {colors} from '~/theme';

const Chevron = () => (
  <View style={styles.container}>
    <Svg width={6} height={10} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.707.293a1 1 0 0 1 0 1.414L2.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
        fill={colors.Turquoise[700]}
      />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 17,
    marginRight: 7,
  },
});

export default Chevron;
