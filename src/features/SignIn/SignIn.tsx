import { Text, View } from 'react-native';
import { FormLayout } from '../../Layouts';
import { signViewStyles as styles } from '../../Layouts/FormLayout/FormLayout.styles';
import { SignInForm } from './SignInForm';

export default function SignIn() {
  return (
    <FormLayout>
      <>
        <View>
          <Text style={styles.title}>Hi There !</Text>
          <Text style={styles.subtitle}>Welcome back</Text>
        </View>
        <SignInForm />
      </>
    </FormLayout>
  );
}
