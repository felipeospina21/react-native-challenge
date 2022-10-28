import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const formButtonsStyles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 40,
  },
  link: {
    textDecorationLine: 'underline',
    color: theme.colors.text_secondary,
  },
  textContainer: {
    marginTop: 10,
  },
  textWrapper: {
    textAlign: 'center',
    color: theme.colors.text_primary,
  },
});
