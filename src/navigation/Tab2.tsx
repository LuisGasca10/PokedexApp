import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./StackNavigator";
import SearchScreen from "../screens/SearchScreen";
import PokemonScreen from "../screens/PokemonScreen";

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