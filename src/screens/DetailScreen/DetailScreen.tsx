import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {getDetail} from '~/api/assets';
import {StackParams} from '~/ts/types';
import {
  Loading,
  Error,
  Button,
  CryptoTitle,
  Money,
  Badge,
} from '~/components/ui';
import Ranking from '~/components/ui/Ranking';
import styles from './styles';

export default function DetailScreen() {
  const {navigate} = useNavigation<StackNavigationProp<StackParams>>();
  const {params} = useRoute<RouteProp<StackParams, 'Detail'>>();
  const [detail, setDetail] = React.useState<any>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    getDetail(params.id)
      .then(resp => {
        setLoading(false);
        setDetail(resp.data);
      })
      .catch(() => setError(true));
  }, [params.id]);

  const onMyWalletPress = () => {
    navigate('Wallet');
  };

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      {error && <Error />}
      {detail && (
        <>
          <View style={styles.card}>
            <View style={styles.row}>
              <CryptoTitle symbol={detail.symbol} name={detail.name} />
              <Ranking rank={detail.rank} />
            </View>
            <View style={styles.row}>
              <Money amount={detail.priceUsd} currency="USD" />
            </View>
            <View style={styles.row}>
              <Money big={false} amount={detail.supply} caption="Supply" />
              <Badge value={detail.changePercent24Hr} />
            </View>
            <View style={styles.row}>
              <Money
                big={false}
                amount={detail.maxSupply}
                caption="Max Supply"
              />
            </View>
            <View style={styles.row}>
              <Money
                big={false}
                amount={detail.marketCapUsd}
                caption="Market Cap"
                currency="USD"
              />
            </View>
          </View>

          <Button onPress={onMyWalletPress}>My Wallet</Button>
        </>
      )}
    </View>
  );
}
