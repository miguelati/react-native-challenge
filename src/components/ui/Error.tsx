import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {colors, typos} from '~/theme';

interface ErrorProps {
  style?: ViewStyle | null;
}

const Error = ({style = null}: ErrorProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[typos.textBaseLeading6Error, {color: colors.Red[500]}]}>
        Error
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Error;
