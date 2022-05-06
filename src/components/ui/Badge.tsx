import React, {useMemo} from 'react';
import {StyleSheet, View, Text, ViewStyle} from 'react-native';
import {typos, colors} from '~/theme';
import {ArrowDown, ArrowUp} from '~/components/icons';
import {roundNumber} from '~/utils';

interface BadgeProps {
  value: string;
  decimalPlaces?: number;
  style?: ViewStyle | null;
}

const Badge = ({style = null, value, decimalPlaces = 1}: BadgeProps) => {
  const formattedValue = useMemo(() => {
    return roundNumber(value, decimalPlaces);
  }, [value, decimalPlaces]);

  const trend = useMemo(() => (parseFloat(value) > 0 ? 'up' : 'down'), [value]);

  const processedStyle = useMemo(() => styles(trend === 'up'), [trend]);

  return (
    <View style={[processedStyle.container, style]}>
      <Text style={processedStyle.text}>
        {trend === 'up' ? <ArrowUp /> : <ArrowDown />}
        {` ${formattedValue} %`}
      </Text>
    </View>
  );
};

const styles = (isUp: boolean) => {
  return StyleSheet.create({
    container: {
      width: 73,
      height: 24,
      padding: 2,
      borderRadius: 12,
      backgroundColor: isUp ? colors.Green[100] : colors.Red[100],
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      ...typos.textSmLeading5Medium,
      color: isUp ? colors.Green[700] : colors.Red[700],
    },
  });
};

export default Badge;
