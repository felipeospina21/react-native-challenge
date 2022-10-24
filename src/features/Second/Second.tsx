import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import MainView from '../../components/MainView/MainView';
import { secondProps } from './props';

type Props = NativeStackScreenProps<RootStackParamList, 'Second'>;

export default function SecondView({ navigation }: Props) {
  return (
    <MainView
      {...secondProps}
      navigateNext={() => navigation.navigate('Third')}
      navigateSkip={() => navigation.navigate('Home')}
    />
  );
}
