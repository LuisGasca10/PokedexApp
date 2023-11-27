import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyStack, RootStackParamList } from "./StackNavigator";
import SearchScreen from "../screens/SearchScreen";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import PokemonScreen from "../screens/PokemonScreen";

type RootTabsParamsList = {
    Stack: RootStackParamList;
    Search: RootStackParamList;
}

const Tab = createBottomTabNavigator<RootTabsParamsList>();

const Tab2 = createStackNavigator<RootStackParamList>();

export const Tab2Screen = () => {
    return (
        <Tab2.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Tab2.Screen name="Home" component={SearchScreen} />
            <Tab2.Screen name="Pokemon" component={PokemonScreen} />
        </Tab2.Navigator>
    );
}




export const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 0 : 10,
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255,0.92)',
                    elevation: 0,
                    borderWidth: 0,
                    borderColor: 'transparent',
                    height: (Platform.OS === 'ios') ? 80 : 60
                }
            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
        >
            <Tab.Screen
                name="Stack"
                component={MyStack}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => (
                        <Icon name="list-outline" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Tab2Screen}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color }) => (
                        <Icon name="search-outline" size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator>

    );
}