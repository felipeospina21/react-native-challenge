import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import login from '../../assets/login.png';
import { signViewStyles as styles } from './FormLayout.styles';

interface FormLayoutProps {
  children: JSX.Element;
}

export function FormLayout({ children }: FormLayoutProps) {
  return (
    <ScrollView style={styles.container}>
      <Image source={login} style={styles.image} resizeMode="stretch" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={styles.formContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.childrenContainer}>{children}</View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
