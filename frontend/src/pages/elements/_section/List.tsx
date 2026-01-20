import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { pokemonActions } from "../../../_redux/pokemon-slice";
import type { RootState } from "@/store/store";
import { getPokemon } from "@/_actions/pokemon-actions";
import type { Element } from "@/models/element";

export default function Elementsist() {
  const dispatch = useDispatch();
  const elements = useSelector(
    (state: RootState) => state.elementState.elements
  );
  const elementSelected = useSelector(
    (state: RootState) => state.elementState.element
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
          ELEMENTS
        </span>
      </div>

      <div className="flex flex-col">
        {elements.map((element: Element, index) => (
          <div
            key={element.id}
            className={cn(
              "flex items-center px-4 py-4 border-b border-[#D0D0D0] cursor-pointer transition-colors text-left group",
              index % 2 === 0 ? "bg-[#F8F8F8]" : "bg-[#E0E0E0]",
              "hover:bg-[#FFCB05]/30",
              elementSelected && elementSelected.id == element.id
                ? "bg-[#FFCB05]/30"
                : ""
            )}
            onClick={() => getPokemonDetails(element.id)}
          >
            <div className="flex gap-4">
              <span className="text-[10px] text-[#707070] w-12">
                No&nbsp;{element.id}
              </span>

              <span className="text-[12px] text-[#303030] uppercase flex-grow tracking-[0.1em]">
                {element.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
