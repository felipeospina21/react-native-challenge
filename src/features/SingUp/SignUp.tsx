import { Text, View } from 'react-native';
import { FormLayout } from '../../Layouts';
import { signViewStyles as styles } from '../../Layouts/FormLayout/FormLayout.styles';
import { SignUpForm } from './SignUpForm';

export default function SignUp() {
  return (
    <FormLayout>
      <>
        <View style={{ marginTop: -10 }}>
          <Text style={styles.title}>Welcome !</Text>
          <Text style={styles.subtitle}></Text>
        </View>
        <SignUpForm />
      </>
    </FormLayout>
  );
}
