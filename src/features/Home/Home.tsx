import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { GenderQueryParam } from '../../api';
import { FilterTags, Footer, SearchBar } from '../../components';
import useDebounce from '../../hooks/useDebounce';
import { Cards } from './Cards/Cards';

export default function Home(): JSX.Element {
  const [filterStr, setFilterStr] = useDebounce('', 1000);
  const [selectedTag, setSelectedTag] = useState<GenderQueryParam>('');
  const tags: GenderQueryParam[] = ['Female', 'Male', 'Genderless', 'unknown'];

  return (
    <LinearGradient locations={[0.2, 0.8]} colors={['#F0E14A', '#97CE4C']}>
      <ScrollView className="h-full">
        <StatusBar style="auto" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="mt-5">
            <Text className="text-xl text-center my-5">Select your character</Text>
            <SearchBar onChange={setFilterStr} />
            <FilterTags tags={tags} selectedTag={selectedTag} handlePress={setSelectedTag} />
            <Cards queryParams={{ name: filterStr, gender: selectedTag }} />
          </View>
        </TouchableWithoutFeedback>
        <Footer />
      </ScrollView>
    </LinearGradient>
  );
}
