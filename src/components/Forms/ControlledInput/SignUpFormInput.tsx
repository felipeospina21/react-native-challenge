import type { UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { Text, TextInput } from 'react-native';
import { z } from 'zod';
import { controlledInputStyles as styles } from './ControlledInput.styles';

export const signUpSchema = z.object({
  userName: z.string().min(3, { message: 'Must be at least 3 characters long' }),
  email: z.string().email(),
  password: z.string().min(8, { message: 'Must be at least 8 characters long' }),
  confirmPassword: z.string().min(8, { message: 'Must be at least 8 characters long' }),
});
export type SignUpFormData = z.infer<typeof signUpSchema>;

interface SignUpInputProps {
  controllerProps: UseControllerProps<SignUpFormData>;
  inputProps: TextInput['props'];
}

export function SignUpFormInput({ controllerProps, inputProps }: SignUpInputProps) {
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
