import { Text, TouchableHighlight, View } from 'react-native';
import { GenderQueryParam } from '../../api';
import { theme } from '../../styles/theme';
interface FilterTagsProps {
  tags: GenderQueryParam[];
  selectedTag: GenderQueryParam;
  handlePress: React.Dispatch<React.SetStateAction<GenderQueryParam>>;
}
export function FilterTags({ tags, selectedTag, handlePress }: FilterTagsProps) {
  const { colors } = theme;
  return (
    <View className="flex-row justify-around mt-3">
      {tags.map((tag, idx) => {
        const fontColor = tag === selectedTag ? 'text-white bg-black' : null;
        function onPress(tag: GenderQueryParam) {
          if (tag === selectedTag) {
            handlePress('');
          } else {
            handlePress(tag);
          }
        }
        return (
          <TouchableHighlight
            key={idx}
            underlayColor={colors.gray[500]}
            activeOpacity={0.1}
            onPress={() => onPress(tag)}
            className="rounded-xl"
          >
            <Text
              className={`rounded-xl p-2 shadow-gray-300 bg-white ${fontColor}`}
              style={{ elevation: 11 }}
            >
              {tag}
            </Text>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}
