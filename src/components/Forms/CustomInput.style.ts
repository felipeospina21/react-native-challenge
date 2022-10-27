import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const customInputStyles = StyleSheet.create({
  input: {
    width: '100%',
    height: 51,
    borderRadius: 12,
    backgroundColor: theme.colors.bg_secondary,
    color: theme.colors.text_secondary,
    paddingHorizontal: 20,
    marginVertical: 8.5,
  },
  errorMsg: {
    color: theme.colors.text_secondary,
    textShadowColor: 'rgb(20, 20, 20)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 7,
  },
});
