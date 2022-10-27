import { Controller } from 'react-hook-form';
import type { FieldErrorsImpl, UseControllerProps } from 'react-hook-form';
import { TextInput, Text } from 'react-native';
import { customInputStyles as styles } from './CustomInput.style';
import { z } from 'zod';

export const schema = z.object({
  userName: z.string().min(3, { message: 'Must be at least 3 characters long' }),
  email: z.string().email(),
  password: z.string().min(8, { message: 'Must be at least 8 characters long' }),
  confirmPassword: z.string().min(8, { message: 'Must be at least 8 characters long' }),
});

export type FormsController = z.infer<typeof schema>;

interface CustomFormProps {
  controllerProps: UseControllerProps<FormsController>;
  errors: Partial<FieldErrorsImpl<FormsController>>;
  inputProps?: {
    placeholder?: string;
    placeholderTextColor?: string;
    secureTextEntry?: boolean;
  };
}

export function CustomInput({ controllerProps, errors, inputProps }: CustomFormProps) {
  const error = errors[controllerProps.name];
  const errorInputStyle = { ...styles.input, borderColor: '#f62f5a', borderWidth: 2 };
  return (
    <>
      <Controller
        {...controllerProps}
        render={({ field }) => (
          <TextInput
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
            style={error ? errorInputStyle : styles.input}
            {...inputProps}
          />
        )}
      />
      {error && <Text style={styles.errorMsg}>{error?.message}</Text>}
    </>
  );
}
