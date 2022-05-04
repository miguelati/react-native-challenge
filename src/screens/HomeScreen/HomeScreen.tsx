import React from 'react';
import {Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {Input, Button} from '~/components/ui';
import {typos} from '~/theme';
import {LoginFormValues} from '~/ts/types';
import styles from './styles';

/*
  Implement form using any user/pass combination
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/
export default function HomeScreen() {
  const {handleSubmit, control} = useForm<LoginFormValues>({
    defaultValues: {
      name: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: LoginFormValues) => console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[typos.headingXl2Bold, styles.title]}>Welcome</Text>
      </View>

      <View style={styles.inputContainer}>
        <Input control={control} rules={{required: true}} name="name" />
        <Input control={control} rules={{required: true}} name="password" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleSubmit(onSubmit)}>Sign In</Button>
      </View>
    </View>
  );
}
