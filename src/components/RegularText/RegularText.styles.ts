import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const {
  colors,
  fonts: { size },
} = theme;

export const regularTextStyles = StyleSheet.create({
  text: {
    fontSize: size.sm,
    color: colors.text_primary,
    marginVertical: 20,
    lineHeight: 23,
  },
});
