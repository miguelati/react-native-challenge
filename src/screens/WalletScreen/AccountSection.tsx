import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import ChallengeContext from '~/config/ChallengeContext';
import {ChallengeContextType} from '~/ts/types';
import {typos} from '~/theme';

const AccountSection = () => {
  const {userName} = React.useContext(ChallengeContext) as ChallengeContextType;
  return (
    <View style={styles.container}>
      <Image
        style={styles.illustration}
        source={require('~/assets/finish-illustration.png')}
      />
      <Text style={[typos.headingXl2Bold, styles.title]}>
        Hello, {userName}
      </Text>
      <Text style={typos.textSmallXs2Regular}>
        Glad you are here,hope to see you soon.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 24,
    marginTop: 24,
  },
  illustration: {
    width: 256,
    height: 160,
  },
  itemContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    marginVertical: 6,
    padding: 8,
  },
});

export default AccountSection;
