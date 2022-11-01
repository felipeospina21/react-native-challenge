import type { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Text, TextInput, View } from 'react-native';

interface FilterProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchBar({ onChange }: FilterProps) {
  function handleChange(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    const { text } = event.nativeEvent;
    onChange(text);
  }
  return (
    <View className="my-4 mx-2">
      <Text>Search</Text>
      <TextInput className="rounded-md border-b px-5 mt-3" onChange={handleChange} />
    </View>
  );
}
