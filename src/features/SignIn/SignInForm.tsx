import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import type { ProfileScreenNavigationProp } from '../../App';
import {
  CustomCheckBox,
  FormButtons,
  SignInFormData,
  SignInFormInput,
  signInSchema,
} from '../../components';
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

      <FormButtons
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
