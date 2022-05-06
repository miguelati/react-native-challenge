import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, typos} from '~/theme';

type PartnerItemProps = {
  name: string;
  url: string;
  comments: string;
};

const PartnerItem = ({item}: {item: PartnerItemProps}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.itemRow}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={styles.descriptionRow}>
          <Text style={typos.textSmallXs1Regular}>{item.comments}</Text>
        </View>
        <View style={styles.urlRow}>
          <Text style={styles.url}>
            <Text style={styles.urlText}>URL: </Text>
            {item.url}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
    marginVertical: 6,
  },
  container: {
    height: 200,
    backgroundColor: '#fff',
    marginVertical: 6,
    marginHorizontal: 30,
    borderRadius: 8,
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...typos.textSmallXs1Bold,
    color: colors.Turquoise[700],
  },
  urlRow: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  url: {
    ...typos.textSmallXs1Regular,
    color: colors.Gray[500],
  },
  urlText: {
    ...typos.textSmallXs1Regular,
    color: colors.Black[500],
  },
  descriptionRow: {
    flex: 4,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default PartnerItem;
