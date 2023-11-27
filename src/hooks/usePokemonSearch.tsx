import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonAPI";
import { PokemonResultResponse, Pokemons, SinglePokemon } from "../interfaces/interface";


export const usePokemonSearch = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SinglePokemon[]>([]);



    const loadPokemons = async () => {
        const resp = await pokemonApi.get<PokemonResultResponse>('https://pokeapi.co/api/v2/pokemon?limit=1400');
        mapPokemonListToSinglePokemon(resp.data.results);
    }

    const mapPokemonListToSinglePokemon = (pokemonList: Pokemons[]) => {

        const newPokemonList: SinglePokemon[] = pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            return {
                id,
                name,
                picture,

            }
        })

        setSimplePokemonList(newPokemonList);
        setIsFetching(false);
    }


    useEffect(() => {
        loadPokemons();
    }, [])

    return {
        isFetching,
        simplePokemonList,
    }

}

