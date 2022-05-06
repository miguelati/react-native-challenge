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
    return big ? styles.bigText : styles.smallText;
  }, [big]);

  return (
    <View style={style}>
      <Text style={bigStyle}>
        {caption && <Text style={styles.caption}>{`${caption} `}</Text>}
        {formattedAmount}
        {currency && <Text style={styles.currency}>{` ${currency}`}</Text>}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {
    ...typos.text2xlLeading8Semibold,
    color: colors.Turquoise[700],
  },
  smallText: {
    ...typos.textSmallXs1Regular,
    color: colors.Black[500],
  },
  caption: {
    ...typos.textSmLeading5Medium,
    color: colors.Black[500],
  },
  currency: {
    ...typos.textSmLeading5Medium,
    color: colors.Gray[500],
  },
});

export default Money;
