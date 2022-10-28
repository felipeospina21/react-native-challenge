import { Link } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { CustomButton } from '../CustomButton/CustomButton';
import { formButtonsStyles as styles } from './FormButtons.styles';

export interface FormButtonsProps {
  onPress: () => void;
  buttonText: string;
  text: string;
  link: {
    text: string;
    goTo: 'SignIn' | 'SignUp';
  };
}

export function FormButtons({ onPress, buttonText, text, link }: FormButtonsProps): JSX.Element {
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
