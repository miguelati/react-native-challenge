import React from 'react';
import {View, Text, ViewStyle, StyleSheet} from 'react-native';
import {typos, colors} from '~/theme';

interface RankingProps {
  style?: ViewStyle | null;
  rank: string;
}

const Ranking = ({style = null, rank}: RankingProps) => {
  return (
    <View style={style}>
      <Text style={styles.text}>#{rank}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    ...typos.textSmLeading5Medium,
    color: colors.Gray[500],
  },
});

export default Ranking;
