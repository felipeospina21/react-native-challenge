import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import type { ProfileScreenNavigationProp } from '../../App';
import {
  SignUpFormData,
  SignUpFormInput,
  signUpSchema,
} from '../../components/Forms/ControlledInput/SignUpFormInput';
import { SignButtons } from '../../components/SignView/SignButtons/SignButtons';
import { theme } from '../../styles/theme';

export function SignUpForm() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { control, handleSubmit } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const {
    colors: { text_secondary },
  } = theme;

  function onSubmit() {
    Alert.alert('Welcome', 'you are now registered and can sign in', [
      { text: 'OK', onPress: () => navigation.navigate('SignIn') },
    ]);
  }

  return (
    <>
      <SignUpFormInput
        controllerProps={{ name: 'userName', control }}
        inputProps={{ placeholder: 'User Name', placeholderTextColor: text_secondary }}
      />
      <SignUpFormInput
        controllerProps={{ name: 'email', control }}
        inputProps={{ placeholder: 'Email', placeholderTextColor: text_secondary }}
      />
      <SignUpFormInput
        controllerProps={{ name: 'password', control }}
        inputProps={{
          placeholder: 'Password',
          placeholderTextColor: text_secondary,
          secureTextEntry: true,
        }}
      />
      <SignUpFormInput
        controllerProps={{ name: 'confirmPassword', control }}
        inputProps={{
          placeholder: 'Confirm Password',
          placeholderTextColor: text_secondary,
          secureTextEntry: true,
        }}
      />

      <SignButtons
        onPress={handleSubmit(onSubmit)}
        buttonText="Sign Up"
        text="Already have an account?  "
        link={{
          text: 'Sign In',
          goTo: 'SignIn',
        }}
      />
    </>
  );
}
