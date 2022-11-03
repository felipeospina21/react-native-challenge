import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableHighlight, View } from 'react-native';
import { AllCharactersQueryParams, getAllCharactersQuery } from '../../api';
import { ProfileScreenNavigationProp } from '../../App';
import { CharacterCard, MortyLoader } from '../../components';
import { ErrorMsg } from '../../components/Errors';

interface CardsProps {
  queryParams?: AllCharactersQueryParams;
}

export function Cards({ queryParams }: CardsProps) {
  const { isLoading, isError, data: characters } = getAllCharactersQuery({ ...queryParams });
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  if (isLoading) return <MortyLoader />;

  if (isError) return <ErrorMsg />;

  return (
    <View className="mt-12">
      <FlatList
        horizontal
        data={characters?.data?.results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => navigation.navigate('Detail', { data: item })}>
            <CharacterCard character={item} />
          </TouchableHighlight>
        )}
      />
    </View>
  );
}
