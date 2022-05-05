import React from 'react';
import {Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParams} from '~/ts/types';
import {Button} from '~/components/ui';
import {typos} from '~/theme';
import styles from './styles';

export default function HomeScreen() {
  const {navigate} = useNavigation<StackNavigationProp<StackParams>>();
  const onGetStartedPress = () => {
    navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="center"
        style={styles.illustration}
        source={require('~/assets/home-illustration.png')}
      />

      <Text style={[typos.headingXl2Bold, styles.titleStyle]}>
        Howdy partner!
      </Text>
      <Text style={[typos.textSmallXs2Regular, styles.textStyle]}>
        This is your assignment.
        {'\n'}
        Follow the instructions on the Readme file.
      </Text>
      <Text style={[typos.textSmallXs2Regular, styles.textStyle]}>
        Don’t worry, it’s easy! You should have the app looking smooth in no
        time.
      </Text>

      <View style={styles.buttonContainer}>
        <Button onPress={onGetStartedPress}>Get Started</Button>
      </View>
    </View>
  );
}
