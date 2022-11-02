import LottieView from 'lottie-react-native';
import { View } from 'react-native';

export function MortyLoader() {
  return (
    <View className="flex-col justify-center items-center py-16">
      <LottieView
        autoPlay
        loop
        style={{
          width: 100,
          height: 100,
        }}
        source={require('./assets/loading.json')}
        resizeMode="cover"
      />
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          marginTop: -10,
        }}
        source={require('./assets/morty.json')}
      />
    </View>
  );
}
