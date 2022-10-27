import CheckBox from 'expo-checkbox';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { checkBoxStyles as styles } from './CheckBox.styles';

interface CustomCheckBoxProps {
  text: string;
}

export function CustomCheckBox({ text }: CustomCheckBoxProps) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  function handlePress() {
    setToggleCheckBox((prev) => !prev);
  }
  return (
    <View style={styles.container}>
      <CheckBox value={toggleCheckBox} onValueChange={handlePress} style={styles.checkbox} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
