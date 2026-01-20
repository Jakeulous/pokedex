import type { Ability } from "./ability";
import type { Element } from "./element";

export interface Pokemon {
  id: number;
  name: string;
  elementId: number;
  hp: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  element?: Element;
  abilities?: Ability[];
}
