import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {PartnerItem} from '~/components/common';
import {Title, Subtitle} from '~/components/ui';
import {typos} from '~/theme';
import partnerList from '~/config/partners.json';

const PartnersSection = () => {
  return (
    <View style={styles.container}>
      <Title text="Partners" style={styles.title} />
      <Subtitle text="Some apps I was involved:" style={styles.subtitle} />
      {(!partnerList || partnerList.length === 0) && (
        <Subtitle text="No Apps 🙈" />
      )}
      {partnerList && partnerList.length > 0 && (
        <FlatList
          data={partnerList}
          keyExtractor={item => item.name}
          renderItem={({item}) => <PartnerItem key={item.name} item={item} />}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typos.headingXl2Bold,
    marginTop: 24,
  },
  subtitle: {
    ...typos.textSmallXs1Regular,
    marginVertical: 24,
  },
});

export default PartnersSection;
