import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { PokemonFull } from '../interfaces/interface';
import { FadeInImage } from './FadeInImage';


interface Props {
    pokemon: PokemonFull
}

const PokemonDetails = ({ pokemon }: Props) => {

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
            {/* Types y Peso*/}
            <View style={{
                ...styles.container,
                marginTop: 370
            }}
            >
                <Text style={styles.title} >Types</Text>
                <View style={{ flexDirection: 'row' }}>

                    {
                        pokemon.types.map(({ type }) => (

                            <Text style={{ ...styles.regularText, marginRight: 10 }}
                                key={type.name}
                            >{type.name}
                            </Text>
                        ))
                    }

                </View>
                <Text style={styles.title} >Peso</Text>
                <Text style={styles.regularText} >{pokemon.weight}Kg</Text>
            </View>

            {/* Sprites */}
            <View style={styles.container}>

                <Text style={styles.title} >Sprites</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />

            </ScrollView>

            {/* Habilidades */}
            <View style={styles.container}>
                <Text style={styles.title} >Habilidades</Text>


                <View style={{ flexDirection: 'row' }}>

                    {
                        pokemon.abilities.map(({ ability }) => (

                            <Text style={{ ...styles.regularText, marginRight: 10 }}
                                key={ability.name}
                            >{ability.name}
                            </Text>
                        ))
                    }

                </View>
            </View>


            {/* Movimientos */}
            <View style={styles.container}>
                <Text style={styles.title} >Habilidades</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {
                        pokemon.moves.map(({ move }) => (

                            <Text style={{ ...styles.regularText, marginRight: 10 }}
                                key={move.name}
                            >{move.name}
                            </Text>
                        ))
                    }

                </View>
            </View>

            {/* Habilidades */}
            <View style={styles.container}>
                <Text style={styles.title} >Stats</Text>
                <View>

                    {
                        pokemon.stats.map((stat, i) => (
                            <View
                                style={{ flexDirection: 'row' }}
                                key={stat.stat.name + i}
                            >
                                <Text style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                    width: 150
                                }}>
                                    {stat.stat.name}
                                </Text>

                                <Text style={{ ...styles.regularText, fontWeight: 'bold' }}

                                >{stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }

                </View>

                <View style={{
                    alignItems: 'center',
                    marginBottom: 20
                }}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>

            </View>

        </ScrollView>
    )
}

export default PokemonDetails

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    regularText: {
        fontSize: 19,
        color: 'black',
        textTransform: 'capitalize',
    },

    basicSprite: {
        width: 100,
        height: 100,
    },
});