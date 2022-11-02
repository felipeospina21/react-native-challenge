import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableHighlight, View } from 'react-native';
import { AllCharactersQueryParams, getAllCharactersQuery } from '../../api';
import { ProfileScreenNavigationProp } from '../../App';
import { CharacterCard, MortyLoader } from '../../components';

interface CardsProps {
  queryParams?: AllCharactersQueryParams;
}

export function Cards({ queryParams }: CardsProps) {
  const { isLoading, data: characters } = getAllCharactersQuery({ ...queryParams });
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  if (isLoading) return <MortyLoader />;

  return (
    <View className="my-14">
      <FlatList
        horizontal
        data={characters?.data.results}
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
