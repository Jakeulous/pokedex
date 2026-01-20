import { Badge } from "@/components/ui/badge";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function PokemonDetailsPane() {
  const dispatch = useDispatch();
  const pokemonDetails = useSelector(
    (state: RootState) => state.pokemonState.pokemon
  );

  return (
    <div className="w-full flex flex-col border-[4px] border-[#303030] rounded-sm font-['Press_Start_2P'] overflow-contain">
      {!pokemonDetails && <>No Pokemon Selected</>}
      {pokemonDetails && (
        <div className="grid grid-cols-2">
          <div className="flex flex-row w-full h-80 border-[#303030] border-r-[4px] border-b-[4px] bg-[#D1C1F0]">
            <div className="flex w-full justify-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex w-full h-12 justify-center text-white text-xl font-bold">
                  NO. {pokemonDetails.id} - {pokemonDetails.name}
                </div>
                <div className="flex w-full justify-center items-center">
                  <div className="flex w-full h-64 bg-slate-300 justify-center overflow-contain shadow-xl">
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
                  backgroundColor: `${pokemonDetails?.element?.color ?? "-"}`,
                }}
              >
                {pokemonDetails?.element?.name ?? "-"}
              </Badge>
            </div>
            <div className="flex flex-col w-full h-full gap-2">
              {pokemonDetails.abilities?.map((ability) => (
                <div className="mt-4 border-[3px] border-[#303030] bg-[#F7E594] p-2 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#707070] text-white px-2 py-1 text-[9px] border border-black shadow-[inset_-1px_-1px_0px_white]">
                        ABILITY
                      </div>
                      <span className="text-[#303030] text-[11px] font-bold uppercase tracking-wider">
                        {ability?.name || "---"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[#303030] text-[9px]">PWR</span>
                      <div className="bg-[#FFFDE7] border border-[#303030] px-2 py-0.5 text-[10px] text-[#303030] min-w-[30px] text-center">
                        {ability?.power || "--"}
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FFFDE7] border-2 border-[#303030]/10 p-2 min-h-[50px]">
                    <p className="font-['Pixelify_Sans'] text-[12px] leading-tight text-[#303030]">
                      {ability.description || "No description available."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
