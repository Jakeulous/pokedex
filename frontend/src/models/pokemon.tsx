import type { Ability } from "./ability";

export interface Pokemon {
  id: number;
  name: string;
  elementId: number;
  hp: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  abilities?: Ability[];
}
