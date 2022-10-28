import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import { HomeLayout } from '../../Layouts';
import { secondProps } from './props';

type Props = NativeStackScreenProps<RootStackParamList, 'Second'>;

export default function SecondView({ navigation }: Props) {
  return (
    <HomeLayout
      {...secondProps}
      navigateNext={() => navigation.navigate('Third')}
      navigateSkip={() => navigation.navigate('SignIn')}
    />
  );
}
