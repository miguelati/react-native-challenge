import React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {typos, colors} from '~/theme';

interface RankingProps {
  style?: ViewStyle | null;
  rank: string;
}

const Ranking = ({style = null, rank}: RankingProps) => {
  return (
    <View style={style}>
      <Text style={[typos.textSmLeading5Medium, {color: colors.Gray[500]}]}>
        #{rank}
      </Text>
    </View>
  );
};

export default Ranking;
