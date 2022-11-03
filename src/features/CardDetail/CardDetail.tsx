import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ScrollView, Text, View } from 'react-native';
import type { RootStackParamList } from '../../App';
import { CharacterStatus, Footer } from '../../components';
import { CardField } from './CardField';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function CardDetail({ route }: Props) {
  const { data } = route.params;
  return (
    <View className="h-full flex-col bg-gray-400">
      <Image source={{ uri: data.image }} className="w-full h-1/2" resizeMode="cover" />
      <ScrollView
        className="rounded-t-[35px] flex-1 p-7 mt-[-10%] bg-slate-100 shadow-4xl shadow-black"
        style={{ elevation: 40 }}
      >
        <Text className="text-center text-3xl">{data.name}</Text>
        <CharacterStatus status={data.status} />
        <Text className="text-center text-gray-500 mt-4">{`${data.gender}, ${data.species}`}</Text>
        <View className="mt-10">
          <CardField label="Last known location:" text={data.location.name} />
          <CardField label="First seen at:" text={data.origin.name} />
          <CardField label="Type:" text={data.type.length ? data.type : 'unknown'} />
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
