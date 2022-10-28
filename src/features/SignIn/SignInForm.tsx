import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import type { ProfileScreenNavigationProp } from '../../App';
import { CustomCheckBox } from '../../components/Forms/CheckBox/CustomCheckBox';
import {
  SignInFormData,
  SignInFormInput,
  signInSchema,
} from '../../components/Forms/ControlledInput/SignInFormInput';
import { SignButtons } from '../../components/SignView/SignButtons/SignButtons';
import { theme } from '../../styles/theme';

export function SignInForm() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { control, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {
    colors: { text_secondary },
  } = theme;

  function onSubmit() {
    navigation.navigate('Profile');
  }

  return (
    <>
      <SignInFormInput
        controllerProps={{ name: 'email', control }}
        inputProps={{ placeholder: 'Email', placeholderTextColor: text_secondary }}
      />
      <SignInFormInput
        controllerProps={{ name: 'password', control }}
        inputProps={{
          placeholder: 'Password',
          placeholderTextColor: text_secondary,
          secureTextEntry: true,
        }}
      />
      <CustomCheckBox text="Remember Me" />

      <SignButtons
        onPress={handleSubmit(onSubmit)}
        buttonText="Sign In"
        text="Don't have an account?  "
        link={{
          text: 'Sign Up',
          goTo: 'SignUp',
        }}
      />
    </>
  );
}
