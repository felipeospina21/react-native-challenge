import { FlatList, Text, View } from 'react-native';
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
    <View className="my-14">
      <FlatList
        horizontal
        data={characters?.data.results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
    </View>
  );
}
