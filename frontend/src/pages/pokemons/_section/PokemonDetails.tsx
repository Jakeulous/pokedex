import { Badge } from "@/components/ui/badge";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function PokemonDetailsPane() {
  const dispatch = useDispatch();
  const pokemonDetails = useSelector(
    (state: RootState) => state.pokemonState.pokemon
  );
  const elements = useSelector(
    (state: RootState) => state.elementState.elements
  );

  function resolveElementType(id: number) {
    let elementFound = elements.find((i) => i.id === id);
    if (elementFound) {
      console.log("here elementFound", elementFound);
      return { color: elementFound.color, name: elementFound.name };
    }
  }

  return (
    <div className="w-full flex flex-col border-[4px] border-[#303030] rounded-sm font-['Press_Start_2P'] overflow-contain">
      {!pokemonDetails && <>No Pokemon Selected</>}
      {pokemonDetails && (
        <div className="grid grid-cols-2">
          <div className="flex flex-row w-80 h-80 border-[#303030] border-r-[4px] border-b-[4px] bg-[#D1C1F0]">
            <div className="flex w-full justify-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex w-full h-12 justify-center text-white text-xl font-bold">
                  NO. {pokemonDetails.id} - {pokemonDetails.name}
                </div>
                <div className="flex w-full justify-center items-center">
                  <div className="flex w-76 h-64 bg-slate-300 justify-center overflow-contain">
                    <img
                      src={pokemonDetails.imageUrl}
                      className="w-inherit h-inherit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white">
            <div className="flex flex-col w-full">HP: {pokemonDetails.hp}</div>
            <div className="flex flex-row">
              <label htmlFor="">ELEMENT:</label>
              <Badge
                style={{
                  backgroundColor: `${
                    resolveElementType(pokemonDetails.elementId)?.color
                  }`,
                }}
              >
                {resolveElementType(pokemonDetails.elementId)?.name}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
