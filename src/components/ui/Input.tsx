import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {useController, UseControllerProps} from 'react-hook-form';
import {typos, colors} from '~/theme';
import {LoginFormValues} from '~/ts/types';

const Input = (props: UseControllerProps<LoginFormValues>) => {
  const {
    field: {onChange, onBlur, name, value, ref},
    fieldState: {error},
  } = useController(props);
  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        style={styles.input}
        placeholder={`Enter your ${name}`}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        secureTextEntry={name === 'password'}
      />
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{`* ${name} is required`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 42,
    paddingHorizontal: 30,
    marginBottom: 16,
  },
  input: {
    ...typos.textBaseLeading6normal,
    width: '100%',
    height: 42,
    borderWidth: 1,
    borderColor: colors.Gray[300],
    borderRadius: 6,
    paddingHorizontal: 13,
    alignItems: 'center',
  },
  errorContainer: {
    height: 25,
  },
  error: {
    ...typos.textSmallXs3Error,
    color: colors.Red[500],
  },
});

export default Input;
