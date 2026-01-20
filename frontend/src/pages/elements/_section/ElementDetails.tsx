import { Badge } from "@/components/ui/badge";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function ElementDetailsPane() {
  const elementDetails = useSelector(
    (state: RootState) => state.elementState.element
  );

  return (
    <div className="w-full h-full flex flex-col p-8 border-[4px] border-[#303030] rounded-sm font-['Press_Start_2P'] overflow-contain shadow-2xl">
      {!elementDetails && (
        <div className="flex h-full w-full text-white justify-center text-center items-center">
          No Element Selected
        </div>
      )}
      {elementDetails && (
        <div className="flex flex-col text-white gap-2">
          <div className="flex flex-col w-full">
            Element Name: {elementDetails.name}
          </div>
          <div className="flex flex-row items-center">
            <label htmlFor="">Element Color:</label>
            <Badge
              className="px-4 py-2 border-[2px] border-black"
              style={{
                backgroundColor: `${elementDetails?.color ?? "-"}`,
              }}
            >
              {elementDetails?.color ?? "-"}
            </Badge>
          </div>
        </div>
      )}
    </div>
  );
}
