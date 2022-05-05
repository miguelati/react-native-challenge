import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParams} from '~/ts/types';
import {Login} from '~/components/auth';
import {typos} from '~/theme';
import styles from './styles';

/*
  Implement form using any user/pass combination
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/
export default function HomeScreen() {
  const {navigate} = useNavigation<StackNavigationProp<StackParams>>();
  const onSubmit = () => navigate('List');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[typos.headingXl2Bold, styles.title]}>Welcome</Text>
      </View>
      <View style={styles.loginContainer}>
        <Login onSuccess={onSubmit} />
      </View>
    </View>
  );
}
