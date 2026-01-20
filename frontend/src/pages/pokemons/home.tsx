import { useEffect } from "react";
import PokedexList from "./_section/List";
import PokemonDetailsPane from "./_section/PokemonDetails";
import { useDispatch } from "react-redux";
import { indexPokemons } from "@/actions/pokemon-actions";
import { pokemonActions } from "./_redux/pokemon-slice";

export default function PokemonHome() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const data = await indexPokemons();
        if (data) {
          // This updates the 'pokemons' array in your Redux state
          dispatch(pokemonActions.loadedPokemon(data));
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
