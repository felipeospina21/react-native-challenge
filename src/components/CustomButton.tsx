import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

interface ButtonContentProps extends ButtonProps {
  btnStyle: any;
  textStyle: any;
}

interface CustomButtonProps extends ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline';
}

export function CustomButton({ title, onPress, variant }: CustomButtonProps) {
  const primary = variant === 'primary';
  const secondary = variant === 'secondary';
  const ghost = variant === 'ghost';
  const outline = variant === 'outline';

  return (
    <View>
      {primary && (
        <ButtonContent
          onPress={onPress}
          title={title}
          btnStyle={styles.primaryBtn}
          textStyle={styles.primaryBtnText}
        />
      )}

      {secondary && (
        <ButtonContent
          onPress={onPress}
          title={title}
          btnStyle={styles.loginBtn}
          textStyle={styles.loginBtnText}
        />
      )}
      {ghost && (
        <ButtonContent
          onPress={onPress}
          title={title}
          btnStyle={styles.secondaryBtn}
          textStyle={styles.secondaryBtnText}
        />
      )}
      {outline && (
        <ButtonContent
          onPress={onPress}
          title={title}
          btnStyle={styles.outlineBtn}
          textStyle={styles.outlineBtnText}
        />
      )}
    </View>
  );
}

function ButtonContent({ onPress, title, btnStyle, textStyle }: ButtonContentProps) {
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
