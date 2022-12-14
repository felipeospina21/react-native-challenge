import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { colors } = theme;

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_primary,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
  },
  textContainer: {
    height: '40%',
    marginVertical: 35,
    marginHorizontal: 54,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
