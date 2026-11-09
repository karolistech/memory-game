import type { Collection } from "@/types/collection";

const keys = {
  bestScore: "bestScore",
  collection: "collection"
};

export const storage = {
  getBestScore(): number {
    const value = localStorage.getItem(keys.bestScore);

    return value ? Number(value) : 0;
  },

  setBestScore(score: number) {
    localStorage.setItem(keys.bestScore, JSON.stringify(score));
  },

  getCollection(): Collection {
    const value = localStorage.getItem(keys.collection);

    return value ? JSON.parse(value) : [];
  },

  setCollection(collection: Collection) {
    localStorage.setItem(keys.collection, JSON.stringify(collection));
  }
};
