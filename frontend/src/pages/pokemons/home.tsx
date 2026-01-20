import PokedexList from "./section/List";
import PokemonDetailsPane from "./section/PokemonDetails";

export default function PokemonHome() {
  return (
    <div className="flex w-full">
      <PokedexList />
      <PokemonDetailsPane />
    </div>
  );
}
