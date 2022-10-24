import { theme } from '../../styles/theme';
import { StyleSheet } from 'react-native';

const {
  colors,
} = theme;

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_primary,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '54%',
    margin: 0,
  },
  textContainer: {
    height: '40%',
    marginVertical: 35,
    marginHorizontal: 54,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

});
