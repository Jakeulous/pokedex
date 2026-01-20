import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function ElementDetailsPane() {
  const elementDetails = useSelector(
    (state: RootState) => state.elementState.element
  );

  return (
    <div className="w-full h-full flex flex-col border-[4px] border-[#303030] rounded-sm font-['Press_Start_2P'] bg-[#D1C1F0] shadow-2xl overflow-hidden">
      {!elementDetails ? (
        <div className="flex flex-grow bg-[#303030]/10 items-center justify-center p-10 text-center">
          <p className="text-[#303030] text-[10px] leading-relaxed animate-pulse">
            SELECT AN ELEMENT
            <br />
            TO VIEW DATA
          </p>
        </div>
      ) : (
        <>
          <div className="bg-[#3D7DCA] p-3 border-b-[4px] border-[#303030] flex items-center justify-between">
            <span className="text-white text-[10px] tracking-widest uppercase">
              Element Profile
            </span>
            <div className="w-6 h-3 bg-[#303030]/20 rounded-full" />
          </div>

          <div className="p-6 flex flex-col gap-6">
            <div className="bg-[#F8F8F8] border-[3px] border-[#303030] p-4 flex items-center justify-between shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
              <span className="text-[#707070] text-[9px]">CATEGORY</span>
              <span className="text-[#303030] text-[14px] font-bold uppercase tracking-tighter">
                {elementDetails.name}
              </span>
            </div>

            <div className="flex flex-col gap-4 p-4 bg-[#303030]/5 border-2 border-dashed border-[#303030]/20">
              <div className="flex items-center justify-between">
                <span className="text-[#303030] text-[9px]">HEX CODE</span>
                <span className="font-['VT323'] text-[#303030] text-xl">
                  {elementDetails.color?.toUpperCase()}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[#303030] text-[9px]">COLOR PREVIEW</span>
                <div
                  className="h-16 w-full border-[3px] border-[#303030] flex items-center justify-center relative shadow-[inset_4px_4px_0px_rgba(0,0,0,0.2)]"
                  style={{ backgroundColor: elementDetails.color }}
                >
                  <div className="absolute top-1 left-1 w-full h-1/2 bg-white/20 pointer-events-none" />

                  <span className="relative z-10 text-white text-[10px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)] font-bold">
                    SAMPLE TEXT
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center opacity-40">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-[#303030]" />
                <div className="w-1 h-4 bg-[#303030]" />
                <div className="w-1 h-4 bg-[#303030]" />
              </div>
              <span className="text-[8px] text-[#303030]">
                TYPE-ID: 00{elementDetails.id}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
