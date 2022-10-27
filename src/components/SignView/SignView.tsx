import {
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Container } from '../Container';
import login from '../../assets/login.png';
import { signViewStyles as styles } from './SignView.styles';

interface SignViewProps {
  children: JSX.Element;
}

export default function SignView({ children }: SignViewProps) {
  return (
    <ScrollView style={styles.container}>
      <Image source={login} style={styles.image} resizeMode="stretch" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={styles.formContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container style={styles.childrenContainer}>{children}</Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
