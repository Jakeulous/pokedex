import { Badge } from "@/components/ui/badge";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function AbilityDetailsPane() {
  const dispatch = useDispatch();
  const abilityDetails = useSelector(
    (state: RootState) => state.abiltiesState.ability
  );

  return (
    <div className="w-full h-full flex flex-col border-[4px] border-[#303030] rounded-sm font-['Press_Start_2P'] overflow-contain shadow-2xl">
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

          <div className="flex flex-col text-white">
            <div className="flex flex-col w-full">
              Ability Name: {abilityDetails.name}
            </div>
            <div className="flex flex-col w-full">
              Ability Description: {abilityDetails.description}
            </div>
            <div className="flex flex-row">
              <label htmlFor="">Ability Power:</label>
              <Badge>{abilityDetails?.power ?? "-"}</Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
