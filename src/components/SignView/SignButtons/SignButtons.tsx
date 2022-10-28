import { Link } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { CustomButton } from '../../Buttons/CustomButton/CustomButton';
import { signButtonsStyles as styles } from './SignButtons.styles';

export interface SignButtonsProps {
  onPress: () => void;
  buttonText: string;
  text: string;
  link: {
    text: string;
    goTo: 'SignIn' | 'SignUp';
  };
}

export function SignButtons({ onPress, buttonText, text, link }: SignButtonsProps): JSX.Element {
  return (
    <View style={styles.buttonsContainer}>
      <CustomButton title={buttonText} onPress={onPress} variant="secondary" />
      <View style={styles.textContainer}>
        <Text style={styles.textWrapper}>
          <Text>{text}</Text>
          <Link to={{ screen: link.goTo }} style={styles.link}>
            {link.text}
          </Link>
        </Text>
      </View>
    </View>
  );
}
