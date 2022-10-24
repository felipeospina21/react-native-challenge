import { theme } from '../../styles/theme';
import { StyleSheet } from 'react-native';

const {
  colors,
  fonts: { size },
} = theme;

export const titleTextStyles = StyleSheet.create({
  title: {
    fontSize: size.xl,
    color: colors.text_primary,
  },

});