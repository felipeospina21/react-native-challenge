
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './features/Home';
import SecondView from './features/Second/Second';
import ThirdView from './features/Third/Third';

export type RootStackParamList = {
  Home: undefined,
  Second: undefined,
  Third: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Second' component={SecondView} />
        <Stack.Screen name='Third' component={ThirdView} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}



registerRootComponent(App)