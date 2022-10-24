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
  variant: 'primary' | 'ghost';
}

export function CustomButton({ title, onPress, variant }: CustomButtonProps) {
  const primary = variant === 'primary';
  const ghost = variant === 'ghost';

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

      {ghost && (
        <ButtonContent
          onPress={onPress}
          title={title}
          btnStyle={styles.secondaryBtn}
          textStyle={styles.secondaryBtnText}
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
    borderColor: theme.colors.primary,
  },
  primaryBtnText: {
    fontSize: theme.fonts.size.md,
    color: theme.colors.primary,
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
  },
});
