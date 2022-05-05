import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {getList, GetListResponse} from '~/api/assets';
import {ListItem} from '~/components/common';
import {Loading, Error} from '~/components/ui';
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
      {error && <Error />}
      {loading && <Loading />}
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
