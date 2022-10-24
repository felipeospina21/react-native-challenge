import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import MainView from '../../components/MainView/MainView';
import { homeProps } from './props';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props): JSX.Element {
  return (
    <MainView
      {...homeProps}
      navigateNext={() => navigation.navigate('Second')}
      navigateSkip={() => navigation.navigate('Home')}
    />
  );
}
