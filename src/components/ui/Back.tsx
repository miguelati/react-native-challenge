import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Back = () => {
  return (
    <Image
      resizeMode="contain"
      style={styles.imageSize}
      source={require('~/assets/chevron.png')}
    />
  );
};

const styles = StyleSheet.create({
  imageSize: {width: 6, height: 10, marginLeft: 17, marginRight: 7},
});

export default Back;
