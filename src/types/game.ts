export type Game = "difficulty" | "loading" | "playing" | "won" | "lost";

export type Difficulty = {
  level: "easy" | "medium" | "hard";
  cards: number;
};
