import { useEffect } from "react";
import PokedexList from "./_section/List";
import PokemonDetailsPane from "./_section/PokemonDetails";
import { useDispatch } from "react-redux";
import { indexPokemons } from "@/_actions/pokemon-actions";
import { pokemonActions } from "../../_redux/pokemon-slice";
import { indexElements } from "@/_actions/elements-actions";
import { elementActions } from "@/_redux/element-slice";
import { indexAbilities } from "@/_actions/abilities-actions";
import { abilityActions } from "@/_redux/ability-slice";

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
          dispatch(elementActions.loadedElements(elementsData));
        }
        const abilitiesData = await indexAbilities();
        if (abilitiesData) {
          dispatch(abilityActions.loadedAbilities(abilitiesData));
        }
      } catch (error) {
        console.error("Failed to fetch pokemons:", error);
      }
    };

    loadInitialData();
  }, [dispatch]);

  return (
    <div className="flex w-full h-full lg:flex-row flex-col-reverse">
      <div className="w-full lg:w-1/4">
        <PokedexList />
      </div>
      <div className="w-full lg:w-3/4">
        <PokemonDetailsPane />
      </div>
    </div>
  );
}
