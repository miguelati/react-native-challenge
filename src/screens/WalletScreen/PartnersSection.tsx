import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {PartnerItem} from '~/components/common';
import {typos} from '~/theme';
import partnerList from '~/config/partners.json';

const PartnersSection = () => {
  return (
    <View style={styles.container}>
      <Text style={typos.headingXl2Bold}>Partners</Text>
      <Text style={typos.textSmallXs1Regular}>Some apps I was involved:</Text>
      {partnerList && partnerList.length > 0 ? (
        <FlatList
          data={partnerList}
          keyExtractor={item => item.name}
          renderItem={({item}) => <PartnerItem key={item.name} item={item} />}
        />
      ) : (
        <Text>No Apps 🙈</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PartnersSection;
