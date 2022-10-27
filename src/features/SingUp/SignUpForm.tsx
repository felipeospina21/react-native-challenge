import { useForm } from 'react-hook-form';
import { CustomInput, FormsController } from '../../components/Forms/CustomInput';
import { SignButtons } from '../../components/SignView/SignButtons/SignButtons';
import { theme } from '../../styles/theme';
import { schema } from '../../components/Forms/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';

export function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormsController>({
    resolver: zodResolver(schema),
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(data: FormsController) {
    console.log(data);
  }

  return (
    <>
      <CustomInput
        controllerProps={{
          name: 'userName',
          rules: { required: true },
          control,
        }}
        errors={errors}
        inputProps={{
          placeholder: 'User Name',
          placeholderTextColor: theme.colors.text_secondary,
        }}
      />

      <CustomInput
        controllerProps={{
          name: 'email',
          rules: { required: true },
          control,
        }}
        errors={errors}
        inputProps={{
          placeholder: 'Email',
          placeholderTextColor: theme.colors.text_secondary,
        }}
      />

      <CustomInput
        controllerProps={{
          name: 'password',
          rules: { required: true },
          control,
        }}
        errors={errors}
        inputProps={{
          placeholder: 'Password',
          placeholderTextColor: theme.colors.text_secondary,
          secureTextEntry: true,
        }}
      />
      <CustomInput
        controllerProps={{
          name: 'confirmPassword',
          rules: { required: true },
          control,
        }}
        errors={errors}
        inputProps={{
          placeholder: 'Confirm Password',
          placeholderTextColor: theme.colors.text_secondary,
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
