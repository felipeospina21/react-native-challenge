import { Text, View } from 'react-native';
import { SignInForm } from './SignInForm';
import { signViewStyles as styles } from '../../components/SignView/SignView.styles';
import SignView from '../../components/SignView/SignView';

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
