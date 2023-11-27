import { Text, View, Platform, FlatList, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import PokemonCard from '../components/PokemonCard';
import { styles } from '../Theme/appTheme'
import Loading from '../components/Loading';
import { SinglePokemon } from '../interfaces/interface';

const SearchScreen = () => {
    const widthScreen = Dimensions.get('window').width;

    const [pokemonFiltered, setPokemonFiltered] = useState<SinglePokemon[]>([]);
    const [term, setTerm] = useState('');

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    useEffect(() => {
        if (term.length === 0) {
            return setPokemonFiltered([]);
        }

        if (isNaN(Number(term))) {
            setPokemonFiltered(
                simplePokemonList.filter(
                    (poke) => poke.name.toLocaleLowerCase()
                        .includes(term.toLocaleLowerCase())
                )
            );

        } else {
            const pokemonById = simplePokemonList.find(poke => poke.id === term);
            setPokemonFiltered(
                (pokemonById) ? [pokemonById] : []
            )
        }


    }, [term])


    if (isFetching) {
        return <Loading />
    }

    return (
        <View style={{
            flex: 1,
            // marginTop: (Platform.OS === 'ios') ? top : top + 10,
            marginHorizontal: 20
        }}>


            <SearchInput
                onDebaunce={setTerm}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: widthScreen - 40,
                    top: (Platform.OS === 'ios') ? top : top + 10
                }}
            />

            <FlatList
                //HEADER
                ListHeaderComponent={() => (<Text style={{
                    ...styles.globalMrgin,
                    ...styles.title,
                    paddingBottom: 10,
                    marginTop: (Platform.OS === 'ios') ? top + 60 : top + 70,
                }}>{term}</Text>)}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={pokemonFiltered}
                renderItem={({ item }) => (
                    <PokemonCard
                        pokemon={item}
                    />
                )}
                keyExtractor={(pokemon) => pokemon.id}


            />

        </View>
    )
}

export default SearchScreen
