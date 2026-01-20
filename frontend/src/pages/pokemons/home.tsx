import { useEffect } from "react";
import PokedexList from "./_section/List";
import PokemonDetailsPane from "./_section/PokemonDetails";
import { useDispatch } from "react-redux";
import { indexPokemons } from "@/_actions/pokemon-actions";
import { pokemonActions } from "../../_redux/pokemon-slice";
import { indexElements } from "@/_actions/elements-actions";

export default function PokemonHome() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const pokemonData = await indexPokemons();
        if (pokemonData) {
          dispatch(pokemonActions.loadedPokemon(pokemonData));
        }
        const elementsData = await indexElements();
        if (elementsData) {
          console.log("here elements", elementsData);
          // dispatch(pokemonActions.loadedPokemon(elementsData));
        }
      } catch (error) {
        console.error("Failed to fetch pokemons:", error);
      }
    };

    loadInitialData();
  }, [dispatch]);

  return (
    <div className="flex w-full">
      <PokedexList />
      <PokemonDetailsPane />
    </div>
  );
}
