import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import type { Pokemon } from "@/models/pokemon";
import { pokemonActions } from "../../../_redux/pokemon-slice";
import type { RootState } from "@/store/store";
import { getPokemon } from "@/_actions/pokemon-actions";

export default function PokedexList() {
  const dispatch = useDispatch();
  const pokemons = useSelector(
    (state: RootState) => state.pokemonState.pokemons
  );
  const pokemonSelected = useSelector(
    (state: RootState) => state.pokemonState.pokemon
  );

  async function getPokemonDetails(id: number) {
    const pokemonRes = await getPokemon(id);
    if (pokemonRes) {
      dispatch(pokemonActions.setShowPokemon(pokemonRes));
    }
  }

  return (
    <aside className="w-full flex flex-col border-[4px] border-[#303030] rounded-sm font-['Press_Start_2P'] shadow-2xl">
      <div className="bg-[#3D7DCA] p-3 border-b-[4px] border-[#303030] flex justify-between items-center">
        <span className="text-white text-[10px] tracking-tighter">POKEDEX</span>
      </div>

      <div className="flex flex-col">
        {pokemons.map((pokemon: Pokemon, index) => (
          <div
            key={pokemon.id}
            className={cn(
              "flex items-center px-4 py-4 border-b border-[#D0D0D0] cursor-pointer transition-colors text-left group",
              index % 2 === 0 ? "bg-[#F8F8F8]" : "bg-[#E0E0E0]",
              "hover:bg-[#FFCB05]/30",
              pokemonSelected && pokemonSelected.id == pokemon.id
                ? "bg-[#FFCB05]/30"
                : ""
            )}
            onClick={() => getPokemonDetails(pokemon.id)}
          >
            <div className="flex gap-4">
              <span className="text-[10px] text-[#707070] w-12">
                No&nbsp;{pokemon.id}
              </span>

              <span className="text-[12px] text-[#303030] uppercase flex-grow tracking-[0.1em]">
                {pokemon.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
