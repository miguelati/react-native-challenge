import React, {useMemo} from 'react';
import {StyleSheet, View, Text, ViewStyle} from 'react-native';
import {typos, colors} from '~/theme';
import {roundNumber, formatMoney} from '~/utils';

interface MoneyProps {
  currency?: string;
  amount: string | number;
  decimalPlaces?: number;
  style?: ViewStyle | null;
  big?: boolean;
  caption?: string | null;
}

const Money = ({
  style = null,
  amount,
  currency,
  decimalPlaces = 2,
  big = true,
  caption = null,
}: MoneyProps) => {
  const formattedAmount = useMemo(() => {
    const amountString = typeof amount === 'number' ? String(amount) : amount;

    return formatMoney(roundNumber(amountString, decimalPlaces));
  }, [amount, decimalPlaces]);
  const bigStyle = useMemo(() => {
    return big
      ? [typos.text2xlLeading8Semibold, styles.bigText]
      : [typos.textSmallXs1Regular, styles.smallText];
  }, [big]);

  return (
    <View style={style}>
      <Text style={bigStyle}>
        {caption && (
          <Text style={[typos.textSmLeading5Medium, styles.caption]}>
            {`${caption} `}
          </Text>
        )}
        {formattedAmount}
        {currency && (
          <Text style={[typos.textSmLeading5Medium, {color: colors.Gray[500]}]}>
            {` ${currency}`}
          </Text>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {color: colors.Turquoise[700]},
  smallText: {color: colors.Black[500]},
  caption: {color: colors.Black[500]},
});

export default Money;
