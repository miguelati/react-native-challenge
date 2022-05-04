import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {typos, colors} from '~/theme';

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

const Button = ({onPress, children}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={[typos.textBaseLeading6, styles.buttonText]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    backgroundColor: colors.Turquoise[500],
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default Button;
