import React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {typos} from '~/theme';

interface CryptoTitleProps {
  symbol: string;
  name: string;
  style?: ViewStyle | null;
}

const CryptoTitle = ({style = null, symbol, name}: CryptoTitleProps) => {
  return (
    <View style={style}>
      <Text style={typos.textBaseLeading6normal}>
        <Text style={typos.headingBold}>{symbol}</Text> - {name}
      </Text>
    </View>
  );
};

export default CryptoTitle;
