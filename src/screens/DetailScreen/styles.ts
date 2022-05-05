import {StyleSheet} from 'react-native';
import {colors} from '~/theme';

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
    shadowColor: colors.Black[500],
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
