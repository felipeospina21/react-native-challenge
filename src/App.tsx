import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { registerRootComponent } from 'expo';
import { Character } from './api';
import CardDetail from './features/CardDetail';
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
  Detail: { data: Character };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList>;
export type ProfileScreenNavigationProp = Props['navigation'];

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Second" component={SecondView} />
          <Stack.Screen name="Third" component={ThirdView} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Detail" component={CardDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

registerRootComponent(App);
