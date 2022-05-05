import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';
import Input from '~/components/ui/Input';
import Button from '~/components/ui/Button';
import {LoginFormValues} from '~/ts/types';

interface LoginProps {
  onSuccess: (data: LoginFormValues) => void;
}

const Login = ({onSuccess}: LoginProps) => {
  const {handleSubmit, control} = useForm<LoginFormValues>({
    defaultValues: {
      name: '',
      password: '',
    },
    mode: 'onChange',
  });
  return (
    <View style={styles.container}>
      <Input control={control} rules={{required: true}} name="name" />
      <Input control={control} rules={{required: true}} name="password" />
      <Button style={styles.buttonStyle} onPress={handleSubmit(onSuccess)}>
        Sign In
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    marginTop: 28,
  },
});

export default Login;
