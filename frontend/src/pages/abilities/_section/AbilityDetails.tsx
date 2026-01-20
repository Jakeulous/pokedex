import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function AbilityDetailsPane() {
  const dispatch = useDispatch();
  const abilityDetails = useSelector(
    (state: RootState) => state.abiltiesState.ability
  );

  return (
    <div className="w-full h-full flex flex-col border-[4px] bg-slate-200 border-[#303030] rounded-sm font-['Press_Start_2P'] overflow-contain shadow-2xl">
      {!abilityDetails && (
        <div className="flex h-full w-full text-white justify-center text-center items-center">
          No Pokemon Selected
        </div>
      )}
      {abilityDetails && (
        <div className="grid grid-cols-2">
          <div className="flex flex-row w-full h-80 border-[#303030] border-r-[4px] border-b-[4px] bg-[#D1C1F0]">
            <div className="flex w-full justify-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex w-full h-12 justify-center text-white text-xl font-bold">
                  NO. {abilityDetails?.pokemon?.id} -{" "}
                  {abilityDetails?.pokemon?.name}
                </div>
                <div className="flex w-full justify-center items-center">
                  <div className="flex w-full h-64 bg-slate-300 justify-center overflow-contain shadow-xl">
                    <img
                      src={abilityDetails?.pokemon?.imageUrl}
                      className="w-inherit h-inherit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-white bg-slate-200">
            <div className="bg-[#3D7DCA] p-2 border-b-[4px] border-[#303030] flex items-center justify-between">
              <span className="text-white text-[10px] tracking-widest uppercase">
                Ability Info
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-white/30" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="p-3 flex flex-col gap-3">
              <div className="flex items-center border-b-2 border-[#303030]/10 pb-2">
                <span className="text-[#707070] text-[9px] w-24 shrink-0">
                  NAME
                </span>
                <span className="text-[#303030] text-[11px] uppercase truncate">
                  {abilityDetails.name}
                </span>
              </div>

              <div className="flex items-center border-b-2 border-[#303030]/10 pb-2">
                <span className="text-[#707070] text-[9px] w-24 shrink-0">
                  POWER
                </span>
                <div className="flex items-center gap-2">
                  <div className="bg-[#303030] text-[#FFCB05] px-3 py-1 text-[10px] rounded-sm shadow-[inset_-2px_-2px_0px_#505050]">
                    {abilityDetails?.power ?? "---"}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-1">
                <span className="text-[#707070] text-[9px]">DESCRIPTION</span>
                <div className="bg-[#FFFDE7] border-2 border-[#303030] p-3 rounded-sm relative shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]">
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#303030]/20" />

                  <p className="font-['Pixelify_Sans'] text-[#303030] text-[14px] leading-tight">
                    {abilityDetails.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-4 bg-[#D1C1F0] border-t-[3px] border-[#303030] flex items-center justify-end px-4">
              <div className="w-8 h-1 bg-[#303030]/20 rounded-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
