import { useForm } from 'react-hook-form';
import { CustomInput, FormsController } from '../../components/Forms/CustomInput';
import { CustomCheckBox } from '../../components/Forms/CheckBox/CustomCheckBox';
import { theme } from '../../styles/theme';
import { SignButtons } from '../../components/SignView/SignButtons/SignButtons';
import { schema } from '../../components/Forms/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Button } from 'react-native';

export function SignInForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormsController>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: FormsController) {
    console.log('naernstoeanrst');
    // Alert.alert('Alert Title', 'My Alert Msg', [
    //   {
    //     text: 'Cancel',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel',
    //   },
    //   { text: 'OK', onPress: () => console.log('OK Pressed') },
    // ]);
  }

  return (
    <>
      <CustomInput
        controllerProps={{
          name: 'email',
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
          control,
        }}
        errors={errors}
        inputProps={{
          placeholder: 'Password',
          placeholderTextColor: theme.colors.text_secondary,
          secureTextEntry: true,
        }}
      />

      <CustomCheckBox text="Remember Me" />
      <Button title="click" onPress={handleSubmit(onSubmit)} />
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
