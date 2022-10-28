import type { UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { Text, TextInput } from 'react-native';
import { z } from 'zod';
import { controlledInputStyles as styles } from './ControlledInput.styles';

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: 'Password is required' }),
});
export type SignInFormData = z.infer<typeof signInSchema>;

interface SignInInputProps {
  controllerProps: UseControllerProps<SignInFormData>;
  inputProps: TextInput['props'];
}

export function SignInFormInput({ controllerProps, inputProps }: SignInInputProps) {
  const { field, fieldState } = useController(controllerProps);
  const error = fieldState.error;
  const errorInputStyle = { ...styles.input, borderColor: '#f62f5a', borderWidth: 2 };

  return (
    <>
      <TextInput
        {...field}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        value={field.value}
        {...inputProps}
        style={error ? errorInputStyle : styles.input}
      />
      {error && <Text style={styles.errorMsg}> {error?.message}</Text>}
    </>
  );
}
