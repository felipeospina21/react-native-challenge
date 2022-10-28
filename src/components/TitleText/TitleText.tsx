import { Text } from 'react-native';
import { titleTextStyles as styles } from './TitleText.styles';

interface TitleTextProps {
  children: string;
}

export function TitleText({ children }: TitleTextProps): JSX.Element {
  return <Text style={styles.title}>{children}</Text>;
}
