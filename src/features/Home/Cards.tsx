import { ScrollView, Text, View } from 'react-native';
import { AllCharactersQueryParams, getAllCharactersQuery } from '../../api';
import { CharacterCard } from '../../components/Cards/CharacterCard';

interface CardsProps {
  queryParams?: AllCharactersQueryParams;
}

export function Cards({ queryParams }: CardsProps) {
  const { isLoading, data: characters } = getAllCharactersQuery({ ...queryParams });
  if (isLoading)
    return (
      <View>
        <Text>...loading</Text>
      </View>
    );

  return (
    <ScrollView className="my-6">
      {characters?.data.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ScrollView>
  );
}
