import { ScrollView, Text, View } from 'react-native';
import { getAllCharactersQuery } from '../../api';
import { CharacterCard } from '../../components/Cards/CharacterCard';

interface CardsProps {
  filterStr: string;
}

export function Cards({ filterStr }: CardsProps) {
  const { isLoading, data: characters } = getAllCharactersQuery(filterStr);
  if (isLoading)
    return (
      <View>
        <Text>...loading</Text>
      </View>
    );
  return (
    <ScrollView>
      {characters?.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ScrollView>
  );
}
