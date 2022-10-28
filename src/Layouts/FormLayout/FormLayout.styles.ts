import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const signViewStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bg_login,
    height: '100%',
  },
  childrenContainer: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
  },
  formContainer: {
    marginHorizontal: 31,
  },
  title: {
    fontSize: theme.fonts.size.xl,
    color: theme.colors.text_secondary,
  },
  subtitle: {
    fontSize: theme.fonts.size.sm,
    marginTop: 9,
    marginBottom: 30,
  },
});
