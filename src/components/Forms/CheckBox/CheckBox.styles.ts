import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const checkBoxStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
  },
  text: {
    fontSize: theme.fonts.size.xs,
  },
});
