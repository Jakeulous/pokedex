"use server";

import camelize from 'camelize';
import { index } from '../services/pokemon-service';
import type { Pokemon } from '@/models/pokemon';

export async function indexPokemons() {
    try {
       const result = await index();
       
       if (result.ok) {
        const response = await result.json();
        
        const data = camelize(response);
        
        return data.map((pokemon: Pokemon, index: number) => ({
            ...pokemon,
            id: (index + 1).toString(),
            name: pokemon.name.toUpperCase(), // Match the GBA style
        }));
       }
       return [];
    } catch (error) {
        console.error("Failed to fetch pokemons:", error);
        return [];
    }
}