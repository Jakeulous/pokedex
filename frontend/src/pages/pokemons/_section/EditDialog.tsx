import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Pokemon } from "@/models/pokemon";
import type { Element } from "@/models/element";
import { useEffect, useState } from "react";
import { indexPokemons, updatePokemon } from "@/_actions/pokemon-actions";
import { useDispatch } from "react-redux";
import { pokemonActions } from "@/_redux/pokemon-slice";

export function EditDialog({ pokemon }: { pokemon: Pokemon }) {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonHp, setPokemonHp] = useState(0);
  const [pokemonElement, setPokemonElement] = useState<Element | null>(null);
  useEffect(() => {
    if (pokemon) {
      setPokemonName(pokemon.name);
      setPokemonHp(pokemon.hp);
      setPokemonElement(pokemon.element ?? null);
    }
  }, [pokemon]);

  async function handleUpdatePokemon() {
    const payload = {
      pokemon: {
        name: pokemonName,
        hp: pokemonHp,
        type: pokemonElement,
        image_url: pokemon.imageUrl,
      },
    };

    const result = await updatePokemon(pokemon.id, payload);
    if (result) {
      dispatch(pokemonActions.setShowPokemon(result));
      const updatedPokeList = await indexPokemons();
      if (updatedPokeList) {
        dispatch(pokemonActions.loadedPokemon(updatedPokeList));
        setDialogOpen(false);
      }
    }
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <form>
        <DialogTrigger asChild>
          <Button>Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] font-['Press_Start_2P']">
          <DialogHeader>
            <DialogTitle>Edit Pokemon</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="pokemon-name">Pokemon Name</Label>
              <Input
                onChange={(v) => setPokemonName(v.target.value)}
                value={pokemonName}
                id="pokemon-name"
                name="pokemon-name"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="pokemon-hp">Pokemon HP</Label>
              <Input
                type="number"
                onChange={(v) => setPokemonHp(Number(v.target.value))}
                value={pokemonHp}
                id="pokemon-hp"
                name="pokemon-hp"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="hover:bg-red-400 hover:text-white cursor-pointer"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              className="bg-blue-400 hover:bg-yellow-400 cursor-pointer"
              onClick={() => handleUpdatePokemon()}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
