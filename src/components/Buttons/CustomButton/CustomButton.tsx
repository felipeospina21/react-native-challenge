import { Text, TouchableOpacity, View } from 'react-native';
import { customButtonStyles as styles } from './CustomButton.styles';

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
