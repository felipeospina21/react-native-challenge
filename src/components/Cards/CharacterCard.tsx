import { Image, Text, View } from 'react-native';
import type { Character } from '../../api';
import { CharacterStatus } from '../Text/CharacterStatus/CharacterStatus';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <View
      className="rounded-xl w-80 h-96 mx-auto my-2 p-3 shadow-gray-300 bg-white"
      style={{ elevation: 10 }}
    >
      <Image
        source={{ uri: character?.image }}
        className="w-full h-48 rounded-xl "
        resizeMode="contain"
      />

      <Text className="text-xl text-center my-2">{character?.name}</Text>
      <CharacterStatus status={character?.status} />
      <Text className="text-sm">
        Gender: <Text className="text-base">{character?.gender}</Text>
      </Text>
      <Text className="text-sm">
        Location: <Text className="text-base">{character?.location.name}</Text>
      </Text>
      <Text className="text-sm">
        Origin: <Text className="text-base">{character?.origin.name}</Text>
      </Text>
    </View>
  );
}
