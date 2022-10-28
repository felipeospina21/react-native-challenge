import { Text } from 'react-native';
import { regularTextStyles as styles } from './RegularText.styles';

interface RegularTextProps {
  children: string;
}

export function RegularText({ children }: RegularTextProps): JSX.Element {
  return <Text style={styles.text}>{children}</Text>;
}
