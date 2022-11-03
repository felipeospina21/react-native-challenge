import { useRef } from 'react';
import type { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Image, TextInput, View } from 'react-native';
import search from '../../assets/search.png';
import { theme } from '../../styles/theme';

interface FilterProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchBar({ onChange }: FilterProps) {
  const inputRef = useRef<TextInput>(null);

  function handleChange(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    const { text } = event.nativeEvent;
    onChange(text);
  }
  return (
    <View
      className="m-4 p-3 flex-row items-center justify-start rounded-2xl bg-white shadow-md shadow-black"
      style={{ elevation: 3 }}
    >
      <Image source={search} style={{ width: 20, height: 20 }} />
      <TextInput
        ref={inputRef}
        className="rounded-md px-6 text-lg w-full flex-1"
        selectionColor={theme.colors.gray[500]}
        onChange={handleChange}
      />
    </View>
  );
}
