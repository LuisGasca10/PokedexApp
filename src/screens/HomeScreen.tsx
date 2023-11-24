import { ActivityIndicator, FlatList, Image, Text, View, } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/StackNavigator'
import { styles } from '../Theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

import PokemonCard from '../components/PokemonCard';

interface NavProps extends NavigationProp<RootStackParamList> { }

export const HomeScreen = () => {

    const navigation = useNavigation<NavProps>();
    const { top } = useSafeAreaInsets();
    const { simplePokemonList, isLoading, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />


            <View style={{ alignItems: 'center' }}>


                <FlatList
                    //HEADER
                    ListHeaderComponent={() => (<Text style={{
                        ...styles.globalMrgin,
                        ...styles.title,
                        top: top + 20,
                        marginBottom: 20 + top
                    }}>Pokedex</Text>)}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={simplePokemonList}
                    renderItem={({ item }) => (
                        <PokemonCard
                            pokemon={item}
                        />
                    )}
                    keyExtractor={(pokemon) => pokemon.id}
                    //Infinite scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={
                        (<ActivityIndicator
                            style={{ height: 100 }}
                            size={20}
                            color={'grey'}
                        />)
                    }

                />
                {/* <Text style={{
                ...styles.globalMrgin,
                ...styles.title,
                top: top + 20
            }}>Pokedex</Text> */}
            </View>

        </>
    )
}

export default HomeScreen

