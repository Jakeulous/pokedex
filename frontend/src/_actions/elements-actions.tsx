"use server";

import camelize from "camelize";
import { index, show } from "../_services/elements-service";

export async function indexElements() {
  try {
    const result = await index();

    if (result.ok) {
      const response = await result.json();

      return camelize(response);
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch elements:", error);
    return [];
  }
}

export async function getElement(id: number) {
  try {
    const result = await show(id);

    if (result.ok) {
      const response = await result.json();

      return camelize(response);
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch element details:", error);
    return [];
  }
}
