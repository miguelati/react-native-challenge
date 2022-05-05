import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParams} from '~/ts/types';
import {GetListResponse} from '~/api/list';
import Money from '~/components/ui/Money';
import Badge from '~/components/ui/Badge';
import CryptoTitle from '~/components/ui/CryptoTitle';
import Ranking from '~/components/ui/Ranking';
import {colors} from '~/theme';

interface ListItemProps {
  item: GetListResponse;
}

const ListItem = ({item}: ListItemProps) => {
  const {navigate} = useNavigation<StackNavigationProp<StackParams>>();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigate('Detail', {id: item.id})}>
        <View style={styles.itemContainer}>
          <View style={styles.itemRow}>
            <CryptoTitle symbol={item.symbol} name={item.name} />
            <Ranking rank={item.rank} />
          </View>
          <View style={styles.itemRow}>
            <Money amount={item.priceUsd} />
            <Badge value={item.changePercent24Hr} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
  },

  container: {
    height: 100,
    backgroundColor: '#fff',
    marginVertical: 6,
    padding: 8,
    borderRadius: 8,
    shadowColor: colors.Black[500],
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ListItem;
