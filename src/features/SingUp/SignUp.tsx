import { View, Text } from 'react-native';
import SignView from '../../components/SignView/SignView';
import { SignUpForm } from './SignUpForm';
import { signViewStyles as styles } from '../../components/SignView/SignView.styles';

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
