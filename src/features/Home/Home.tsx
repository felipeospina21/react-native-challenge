import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import type { RootStackParamList } from '../../App';
import { FilterTags, SearchBar } from '../../components';
import useDebounce from '../../hooks/useDebounce';
import { Cards } from './Cards';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props): JSX.Element {
  const [filterStr, setFilterStr] = useDebounce('', 1000);
  const tags = ['Female', 'Male', 'Genderless', 'unknown'];
  return (
    <View>
      <StatusBar style="auto" />
      <View className="mt-5">
        <Text className="text-xl">Select your character</Text>
        <SearchBar onChange={setFilterStr} />
        <FilterTags tags={tags} />
        <Cards filterStr={filterStr} />
      </View>
    </View>
  );
}
