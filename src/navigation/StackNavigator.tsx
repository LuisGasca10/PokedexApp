import { createStackNavigator } from '@react-navigation/stack';
import PokemonScreen from '../screens/PokemonScreen';
import HomeScreen from '../screens/HomeScreen';
import { SinglePokemon } from '../interfaces/interface';


export type RootStackParamList = {
    Home: undefined;
    Pokemon: { singlePokemon: SinglePokemon, color: string };
}

const Stack = createStackNavigator<RootStackParamList>();

export const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Pokemon" component={PokemonScreen} />
        </Stack.Navigator>
    );
}