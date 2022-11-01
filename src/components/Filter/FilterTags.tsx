import { Text, View } from 'react-native';

interface FilterTagsProps {
  tags: string[];
}
export function FilterTags({ tags }: FilterTagsProps) {
  return (
    <View className="flex-row justify-around">
      {tags.map((tag, idx) => (
        <Text
          key={idx}
          className="rounded-md p-2 shadow-gray-300 bg-white"
          style={{ elevation: 11 }}
        >
          {tag}
        </Text>
      ))}
    </View>
  );
}
