import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import { HomeLayout } from '../../Layouts';
import { homeProps } from './props';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props): JSX.Element {
  return (
    <HomeLayout
      {...homeProps}
      navigateNext={() => navigation.navigate('Second')}
      navigateSkip={() => navigation.navigate('SignIn')}
    />
  );
}
