import React from 'react';
import {StyleSheet, View, Text, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {typos, colors} from '~/theme';

interface ButtonProps {
  onPress: () => void;
  style?: ViewStyle | null;
  children: React.ReactNode;
}

const Button = ({style = null, onPress, children}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 42,
    backgroundColor: colors.Turquoise[500],
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 6,
    marginHorizontal: 30,
  },
  buttonText: {
    ...typos.textBaseLeading6,
    color: colors.White[500],
  },
});

export default Button;
