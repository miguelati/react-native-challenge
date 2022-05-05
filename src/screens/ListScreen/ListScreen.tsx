import React, {useEffect} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import {getList, GetListResponse} from '~/api/list';
import {ListItem} from '~/components/common';
import {colors, typos} from '~/theme';
import styles from './styles';

export default function ListScreen() {
  const [list, setList] = React.useState<GetListResponse[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    getList()
      .then(resp => {
        setList(resp.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.loading}>
          <Text style={[typos.textBaseLeading6Error, {color: colors.Red[500]}]}>
            Error
          </Text>
        </View>
      )}
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.Turquoise[500]} />
        </View>
      )}
      {list && list.length > 0 && (
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ListItem key={item.id} item={item} />}
        />
      )}
    </View>
  );
}
