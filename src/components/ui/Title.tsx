import React from 'react';
import {Text, ViewStyle, StyleSheet} from 'react-native';
import {typos} from '~/theme';

interface TitleProps {
  style?: ViewStyle | null;
  text: string;
}

const Title = ({style = null, text}: TitleProps) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    ...typos.headingXl2Bold,
  },
});

export default Title;
