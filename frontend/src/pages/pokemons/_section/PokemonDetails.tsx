import { pokemonActions } from "@/_redux/pokemon-slice";
import { Badge } from "@/components/ui/badge";
import type { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PokemonDetailsPane() {
  const dispatch = useDispatch();
  const pokemonDetails = useSelector(
    (state: RootState) => state.pokemonState.pokemon
  );
  const elements = useSelector(
    (state: RootState) => state.elementState.elements
  );
  const abilities = useSelector(
    (state: RootState) => state.abiltiesState.abilities
  );

  function resolveElementType(id: number) {
    let elementFound = elements.find((i) => i.id === id);
    if (elementFound) {
      return { color: elementFound.color, name: elementFound.name };
    }
  }

  useEffect(() => {
    if (!pokemonDetails || !abilities.length) return;

    const abilitiesResult = abilities.filter(
      (i) => i.pokemonId === pokemonDetails.id
    );
    const currentAbilityCount = pokemonDetails.abilities?.length || 0;

    if (
      abilitiesResult.length > 0 &&
      currentAbilityCount !== abilitiesResult.length
    ) {
      dispatch(pokemonActions.setShowPokemonAbilities(abilitiesResult));
    }
  }, [pokemonDetails?.id, abilities, dispatch]);

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
            <div className="flex flex-col w-full h-full gap-2">
              {pokemonDetails.abilities?.map((ability) => (
                <div
                  key={ability.id}
                  className="w-full border-[2px] border-black border-dashed p-4 bg-slate-200 text-black"
                >
                  <div className="flex w-full">Move:{ability.name}</div>
                  <div className="flex w-full">
                    Description: {ability.description}
                  </div>
                  <div className="flex w-full">
                    Power:&nbsp;<b>{ability.power}</b>
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
