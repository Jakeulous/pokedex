import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Pokemon } from "@/models/pokemon";
import { pokemonActions } from "../_redux/pokemon-slice";
import type { RootState } from "@/store/store";

export default function PokedexList() {
  const dispatch = useDispatch();
  const pokemons = useSelector(
    (state: RootState) => state.pokemonState.pokemons
  );

  const handleDataLoad = (data: Pokemon[]) => {
    dispatch(pokemonActions.loadedPokemon(data));
  };

  function getPokemonDetails(id: number) {
    console.log("here id", id);
  }

  return (
    <aside className="w-[380px] flex flex-col border-[4px] border-[#303030] rounded-sm font-['Press_Start_2P']">
      <div className="bg-[#3D7DCA] p-3 border-b-[4px] border-[#303030] flex justify-between items-center">
        <span className="text-white text-[10px] tracking-tighter">POKEDEX</span>
      </div>

      {/* Main List Area using ShadCN ScrollArea */}
      <ScrollArea className="h-full bg-[#F8F8F8]">
        <div className="flex flex-col">
          {pokemons.map((pokemon: Pokemon, index) => (
            <button
              key={pokemon.id}
              className={cn(
                "flex items-center px-4 py-4 border-b border-[#D0D0D0] cursor-pointer transition-colors text-left group",
                index % 2 === 0 ? "bg-[#F8F8F8]" : "bg-[#E0E0E0]",
                "hover:bg-[#FFCB05]/30"
              )}
              onClick={() => getPokemonDetails(pokemon.id)}
            >
              <span className="text-[10px] text-[#707070] w-12">
                No&nbsp;{pokemon.id}
              </span>

              <span className="text-[12px] text-[#303030] uppercase flex-grow tracking-[0.1em]">
                {pokemon.name}
              </span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}
