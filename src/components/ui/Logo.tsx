import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = () => {
  return (
    <Image style={styles.imageSize} source={require('~/assets/logo.png')} />
  );
};

const styles = StyleSheet.create({
  imageSize: {width: 31, height: 26},
});

export default Logo;
