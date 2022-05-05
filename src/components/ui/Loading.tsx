import React from 'react';
import {View, StyleSheet, ViewStyle, ActivityIndicator} from 'react-native';
import {colors} from '~/theme';

interface LoadingProps {
  style?: ViewStyle | null;
}

const Loading = ({style = null}: LoadingProps) => {
  return (
    <View style={[style, styles.loading]}>
      <ActivityIndicator size="large" color={colors.Turquoise[500]} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
