import React from 'react';
import {Text, ViewStyle, StyleSheet} from 'react-native';
import {typos} from '~/theme';

interface SubtitleProps {
  style?: ViewStyle | null;
  text: string;
}

const Subtitle = ({style = null, text}: SubtitleProps) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    ...typos.textSmallXs2Regular,
  },
});

export default Subtitle;
