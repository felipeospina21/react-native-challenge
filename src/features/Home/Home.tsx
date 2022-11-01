import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { getAllCharactersQuery } from '../../api';
import type { RootStackParamList } from '../../App';
import { CharacterCard } from '../../components/Cards/CharacterCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props): JSX.Element {
  const { isLoading, data: characters } = getAllCharactersQuery();

  if (isLoading)
    return (
      <View>
        <Text>...loading</Text>
      </View>
    );
  return (
    <View>
      <StatusBar style="auto" />
      <View className="mt-5">
        <Text className="text-xl">Select your character</Text>
        <ScrollView>
          {characters?.results.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
