import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { pokemonActions } from "../../../_redux/pokemon-slice";
import type { RootState } from "@/store/store";
import { getPokemon } from "@/_actions/pokemon-actions";
import type { Ability } from "@/models/ability";

export default function AbilitiesList() {
  const dispatch = useDispatch();
  const abilities = useSelector(
    (state: RootState) => state.abiltiesState.abilities
  );
  const pokemonSelected = useSelector(
    (state: RootState) => state.abiltiesState.ability
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
        <span className="text-white text-[10px] tracking-tighter">
          ABILITIES
        </span>
      </div>

      <div className="flex flex-col">
        {abilities.map((ability: Ability, index) => (
          <div
            key={ability.id}
            className={cn(
              "flex items-center px-4 py-4 border-b border-[#D0D0D0] cursor-pointer transition-colors text-left group",
              index % 2 === 0 ? "bg-[#F8F8F8]" : "bg-[#E0E0E0]",
              "hover:bg-[#FFCB05]/30",
              pokemonSelected && pokemonSelected.id == ability.id
                ? "bg-[#FFCB05]/30"
                : ""
            )}
            onClick={() => getPokemonDetails(ability.id)}
          >
            <div className="flex gap-4">
              <span className="text-[10px] text-[#707070] w-12">
                No&nbsp;{ability.id}
              </span>

              <span className="text-[12px] text-[#303030] uppercase flex-grow tracking-[0.1em]">
                {ability.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
