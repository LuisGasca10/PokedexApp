import { Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';



interface Props extends StackScreenProps<RootStackParamList, 'Pokemon'> { };

const PokemonScreen = ({ route, navigation }: Props) => {
    const { color, singlePokemon } = route.params;
    const { id, name, picture } = singlePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon(id);

    return (

        <View style={{ flex: 1 }}>
            {/* Header Container */}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }}>
                {/* Backbutton */}
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 20
                    }}
                >
                    <Icon
                        name="arrow-back-outline"
                        color="white"
                        size={35}
                    />
                </TouchableOpacity>

                {/* Nombre del Pokemon */}

                <Text style={{
                    ...styles.pokemonName,
                    top: top + 50
                }}

                >
                    {name + '\n'}#{id}
                </Text>

                {/* Pokebola Blanca */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />

                <FadeInImage
                    uri={picture}
                    style={styles.pokemonImg}
                />

            </View>

            {/* Detalles y loading*/}

            {

                (isLoading) ?
                    (<View style={styles.loadingIndicator}>
                        <ActivityIndicator
                            size={50}
                            color={color}
                        />
                    </View>)
                    :

                    (<PokemonDetails
                        pokemon={pokemon}
                    />)

            }


        </View>
    )
}

export default PokemonScreen

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,

    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
        textTransform: 'capitalize'
    },
    pokeball: {
        width: 250,
        height: 250,
        top: 20,
        opacity: 0.7
    },
    pokemonImg: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})