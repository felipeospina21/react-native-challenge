import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './features/Home';
import SecondView from './features/Second/Second';
import ThirdView from './features/Third/Third';
import SignIn from './features/SignIn/SignIn';
import SignUp from './features/SingUp/SignUp';

export type RootStackParamList = {
  Home: undefined;
  Second: undefined;
  Third: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Second" component={SecondView} />
        <Stack.Screen name="Third" component={ThirdView} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
