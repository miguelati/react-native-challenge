import {StyleSheet} from 'react-native';
import {colors, shadows} from '~/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 205,
    borderRadius: 8,
    backgroundColor: colors.White[500],
    paddingLeft: 17,
    paddingRight: 25,
    paddingVertical: 20,
    marginVertical: 24,
    marginHorizontal: 30,
    ...shadows[1],
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
