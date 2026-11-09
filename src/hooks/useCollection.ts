import { useState } from "react";

import type { Collection } from "@/types/collection";
import type { Pokemon } from "@/types/pokemon";

import { storage } from "@/api/local-storage";

import pokemons from "@/data/pokemons.json";

export function useCollection() {
  const [collection, setCollection] = useState<Collection>(() => storage.getCollection());

  function getPokemon(id: number): Pokemon | undefined {
    return collection.includes(id) ? pokemons[id - 1] : undefined;
  }

  function unlockPokemon(id: number) {
    if (collection.includes(id)) return;

    const updatedCollection = [...collection, id];

    setCollection(updatedCollection);
    storage.setCollection(updatedCollection);
  }

  return { collection, getPokemon, unlockPokemon };
}
