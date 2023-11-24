import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { PokemonFull } from '../interfaces/interface';


interface Props {
    pokemon: PokemonFull
}

const PokemonDetails = ({ pokemon }: Props) => {
    console.log(pokemon.types[0].type.url);
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
            <View style={{
                ...styles.container,
                marginTop: 370
            }}
            >
                <Text style={styles.title} >Types</Text>

                {
                    pokemon.types.map(({ type }) => (

                        <Text style={{
                            color: 'black'
                        }}
                            key={type.name}
                        >{type.name}
                        </Text>
                    ))
                }

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
        color: 'black'
    }
});