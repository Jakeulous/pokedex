import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { EditDialog } from "./EditDialog";

export default function PokemonDetailsPane() {
  const pokemonDetails = useSelector(
    (state: RootState) => state.pokemonState.pokemon
  );

  return (
    <div className="w-full h-full flex flex-col border-[4px] bg-slate-200 border-[#303030] rounded-sm font-['Press_Start_2P'] overflow-contain shadow-2xl">
      {!pokemonDetails && (
        <div className="flex h-full w-full text-white justify-center text-center items-center">
          No Pokemon Selected
        </div>
      )}
      {pokemonDetails && (
        <div className="flex flex-row">
          <div className="flex w-full h-full flex-row">
            <div className="flex w-1/2">
              <div className="flex flex-col w-full h-full border-[#303030] border-r-[4px] border-b-[4px] bg-[#D1C1F0] items-center justify-center">
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
            <div className="flex w-1/2">
              <div className="flex flex-col w-full text-white">
                <div className="bg-[#3D7DCA] p-2 border-b-[4px] border-[#303030] flex items-center justify-between">
                  <span className="text-white text-[10px] tracking-widest uppercase">
                    Data Summary
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/40 shadow-[1px_1px_0px_rgba(0,0,0,0.2)]" />
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-4 bg-slate-200">
                  <div className="flex items-center justify-between border-b-2 border-[#303030]/10 pb-3">
                    <span className="text-[#707070] shrink-0">HP</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-[#303030] rounded-full overflow-hidden border border-[#303030]">
                        <div className="bg-[#4CAF50] h-full w-[80%]" />{" "}
                      </div>
                      <span className="text-[#303030] text-[12px] font-bold">
                        {pokemonDetails.hp}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b-2 border-[#303030]/10 pb-3">
                    <span className="text-[#707070] shrink-0">ELEMENT</span>
                    <div
                      className="px-3 py-1 rounded-full border-[2px] border-[#303030] text-white text-[9px] shadow-[inset_-2px_-2px_0px_rgba(0,0,0,0.3),2px_2px_0px_rgba(0,0,0,0.1)]"
                      style={{
                        backgroundColor:
                          pokemonDetails?.element?.color ?? "#707070",
                      }}
                    >
                      {pokemonDetails?.element?.name?.toUpperCase() ?? "???"}
                    </div>
                  </div>

                  <div className="flex justify-center pt-2">
                    <div className="w-full group">
                      <EditDialog pokemon={pokemonDetails} />
                    </div>
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
                            <span className="text-[#303030] text-[9px]">
                              PWR
                            </span>
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
                  <div className="h-2 bg-[#303030]/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
