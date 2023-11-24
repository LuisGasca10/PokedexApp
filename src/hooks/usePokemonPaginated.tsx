import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonAPI";
import { PokemonResultResponse, Pokemons, SinglePokemon } from "../interfaces/interface";


export const usePokemonPaginated = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SinglePokemon[]>([]);

    const nextPageURL = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

    const loadPokemons = async () => {
        setIsLoading(true);
        const resp = await pokemonApi.get<PokemonResultResponse>(nextPageURL.current);
        nextPageURL.current = resp.data.next;
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

        setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
        setIsLoading(false);
    }


    useEffect(() => {
        loadPokemons();
    }, [])

    return {
        isLoading,
        simplePokemonList,
        loadPokemons
    }

}

