import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { colors } = theme;

export const profileStyles = StyleSheet.create({
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
    marginVertical: 15,
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    marginTop: 20,
    marginBottom: 50,
  },
  avatar: {
    width: 120,
    height: 120,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 120,
    backgroundColor: theme.colors.primary,
  },
  userData: {
    fontSize: theme.fonts.size.sm,
    color: theme.colors.text_primary,
  },
});
