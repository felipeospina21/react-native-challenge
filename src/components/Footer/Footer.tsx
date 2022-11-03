import { Image, View } from 'react-native';
import logo from '../../assets/rm_logo.png';
export function Footer() {
  return (
    <View className="w-full flex-row justify-center items-center my-3">
      <Image source={logo} className="w-56 h-16" />
    </View>
  );
}
