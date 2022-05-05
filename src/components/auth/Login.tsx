import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';
import ChallengeContext from '~/config/ChallengeContext';
import Input from '~/components/ui/Input';
import Button from '~/components/ui/Button';
import {LoginFormValues, ChallengeContextType} from '~/ts/types';

interface LoginProps {
  onSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({onSuccess}) => {
  const {handleSubmit, control} = useForm<LoginFormValues>({
    defaultValues: {
      name: '',
      password: '',
    },
    mode: 'onChange',
  });

  const {updateUserName} = React.useContext(
    ChallengeContext,
  ) as ChallengeContextType;

  const onSignInPress = (data: LoginFormValues) => {
    updateUserName(data.name);
    onSuccess();
  };

  return (
    <View style={styles.container}>
      <Input control={control} rules={{required: true}} name="name" />
      <Input control={control} rules={{required: true}} name="password" />
      <Button style={styles.buttonStyle} onPress={handleSubmit(onSignInPress)}>
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
