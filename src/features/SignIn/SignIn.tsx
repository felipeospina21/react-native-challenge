import { Text, View } from 'react-native';
import { SignView } from '../../components';
import { signViewStyles as styles } from '../../components/SignView/SignView.styles';
import { SignInForm } from './SignInForm';

export default function SignIn() {
  return (
    <SignView>
      <>
        <View>
          <Text style={styles.title}>Hi There !</Text>
          <Text style={styles.subtitle}>Welcome back</Text>
        </View>
        <SignInForm />
      </>
    </SignView>
  );
}
