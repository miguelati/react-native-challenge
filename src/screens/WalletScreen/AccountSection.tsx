import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import ChallengeContext from '~/config/ChallengeContext';
import {Title, Subtitle} from '~/components/ui';
import {ChallengeContextType} from '~/ts/types';

const AccountSection = () => {
  const {userName} = React.useContext(ChallengeContext) as ChallengeContextType;
  return (
    <View style={styles.container}>
      <Image
        style={styles.illustration}
        source={require('~/assets/finish-illustration.png')}
      />
      <Title text={`Hello, ${userName}`} style={styles.title} />
      <Subtitle text="Glad you are here,hope to see you soon." />
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
});

export default AccountSection;
