"use server";

import camelize from "camelize";
import { index, show } from "../_services/pokemon-service";

export async function indexPokemons() {
  try {
    const result = await index();

    if (result.ok) {
      const response = await result.json();

      return camelize(response);
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch pokemons:", error);
    return [];
  }
}

export async function getPokemon(id: number) {
  try {
    const result = await show(id);

    if (result.ok) {
      const response = await result.json();

      return camelize(response);
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch pokemon details:", error);
    return [];
  }
}
