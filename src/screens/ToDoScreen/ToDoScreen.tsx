import React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParams} from '~/ts/types';
import {Button, Title, Subtitle} from '~/components/ui';
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
      <Title text="Howdy partner!" style={styles.titleStyle} />
      <Subtitle
        text={
          'This is your assignment.\nFollow the instructions on the Readme file.'
        }
        style={styles.textStyle}
      />
      <Subtitle
        text="Don’t worry, it’s easy! You should have the app looking smooth in no time."
        style={styles.textStyle}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={onGetStartedPress}>Get Started</Button>
      </View>
    </View>
  );
}
