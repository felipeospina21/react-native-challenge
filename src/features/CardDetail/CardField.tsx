import { Text, View } from 'react-native';

interface CardFieldProps {
  label: string;
  text: string;
}

export function CardField({ label, text }: CardFieldProps) {
  return (
    <View className="flex-col m-1">
      <Text className="text-base text-gray-400">{label}</Text>
      <Text className="text-lg">{text}</Text>
    </View>
  );
}
