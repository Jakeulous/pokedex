import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export function PageTitleUpdater() {
  const location = useLocation();
  const pokemon = useSelector((state: RootState) => state.pokemonState.pokemon);

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "POKEDEX | HOME",
      "/abilities": "POKEDEX | ABILITIES",
      "/elements": "POKEDEX | ELEMENTS",
    };

    if (location.pathname.startsWith("/pokemon") && pokemon) {
      document.title = `POKEDEX | ${pokemon.name.toUpperCase()}`;
    } else {
      document.title = titles[location.pathname] || "POKEDEX";
    }
  }, [location, pokemon]);

  return null;
}
