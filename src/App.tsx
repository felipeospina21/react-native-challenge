import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import Home from './features/Home';
import Profile from './features/Profile';
import SecondView from './features/Second';
import SignIn from './features/SignIn';
import SignUp from './features/SingUp';
import ThirdView from './features/Third';

export type RootStackParamList = {
  Home: undefined;
  Second: undefined;
  Third: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList>;
export type ProfileScreenNavigationProp = Props['navigation'];

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Second" component={SecondView} />
        <Stack.Screen name="Third" component={ThirdView} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
