import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const customButtonStyles = StyleSheet.create({
  primaryBtn: {
    width: 229,
    borderRadius: 22,
    padding: 13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  primaryBtnText: {
    fontSize: theme.fonts.size.md,
    color: theme.colors.text_secondary,
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 229,
    borderRadius: 22,
    padding: 13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryBtnText: {
    fontSize: theme.fonts.size.md,
    color: theme.colors.text_primary,
    fontWeight: '700',
  },
  outlineBtn: {
    width: 229,
    borderRadius: 22,
    padding: 13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  outlineBtnText: {
    fontSize: theme.fonts.size.md,
    color: theme.colors.primary,
    fontWeight: '700',
  },
  loginBtn: {
    width: '100%',
    borderRadius: 22,
    padding: 13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.secondary,
    backgroundColor: theme.colors.secondary,
  },
  loginBtnText: {
    fontSize: theme.fonts.size.md,
    color: theme.colors.text_secondary,
    fontWeight: '700',
  },
});
