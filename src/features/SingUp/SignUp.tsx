import { Text, View } from 'react-native';
import { SignView } from '../../components';
import { signViewStyles as styles } from '../../components/SignView/SignView.styles';
import { SignUpForm } from './SignUpForm';

export default function SignUp() {
  return (
    <SignView>
      <>
        <View style={{ marginTop: -10 }}>
          <Text style={styles.title}>Welcome !</Text>
          <Text style={styles.subtitle}></Text>
        </View>
        <SignUpForm />
      </>
    </SignView>
  );
}
