import { Image, Text, View } from 'react-native';
import morty from '../../assets/morty.png';

export function ErrorMsg() {
  return (
    <View className="w-full h-96 my-6 px-2 py-8 flex items-center justify-evenly">
      <Text className="text-2xl text-gray-700 font-bold">Oops!!!, there it a problem...</Text>
      <Image source={morty} className="w-40 h-40" />
      <Text className="text-base text-gray-800">please try again later</Text>
    </View>
  );
}
