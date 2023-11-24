import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SinglePokemon } from '../interfaces/interface'
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;


type NavProps = StackNavigationProp<RootStackParamList>;

interface Props {
    pokemon: SinglePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
    const [bgColor, setBgColor] = useState('#808080');
    const isMounted = useRef(true);
    const navigation = useNavigation<NavProps>()

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, { fallback: '#808080' }).then(
            colors => {
                if (!isMounted) return;

                if (colors.platform === 'android') {
                    setBgColor(colors.dominant || 'grey');
                } else if (colors.platform === 'ios') {
                    setBgColor(colors.background || 'grey');
                }
            }
        );

        return () => { isMounted.current = false }
    }, [])


    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Pokemon', {
                singlePokemon: pokemon,
                color: bgColor
            })}
        >
            {/* Contenedor Principal */}
            <View
                style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.4,
                    backgroundColor: bgColor
                }}
            >

                {/* Contenedor con el Nombre y el ID */}

                <View>
                    <Text style={styles.name} >
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>

                </View>

                {/* Contenedor de la pokebola */}
                <View style={styles.pokebolaContainer}>

                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>
                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />


            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        top: 20,
        left: 10,
        textTransform: 'capitalize'
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,


    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -7
    },
    pokebolaContainer: {
        opacity: 0.7,
        height: 100,
        width: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden'
    }
});

export default PokemonCard