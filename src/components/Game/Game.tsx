import { useState } from "react";

import type { Screen } from "@/types/screen";
import type { Difficulty, Game } from "@/types/game";
import type { Pokemon } from "@/types/pokemon";

import pokemons from "@/data/pokemons.json";

import LoadingScreen from "@/components/Game/LoadingScreen/LoadingScreen";
import Card from "@/components/Game/Card/Card";

import "./Game.css";
import icons from "@/assets/icons/icons.svg";

type GameProps = {
  setScreen: (screen: Screen) => void;
};

const difficulties: Difficulty[] = [
  { level: "easy", cards: 4 },
  { level: "medium", cards: 8 },
  { level: "hard", cards: 12 }
];

export default function Game({ setScreen }: GameProps) {
  const [game, setGame] = useState<Game>("difficulty");
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  function newGame(difficulty: Difficulty) {
    setDifficulty(difficulty);
    setGame("loading");

    const pokemons = getRandomPokemon(difficulty.cards);

    setPokemons(pokemons);
    setTimeout(() => setGame("playing"), 1000);
  }

  return (
    <div className="game">
      {game === "difficulty" && (
        <div className="game__difficulty">
          <h2 className="game__difficulty-title">Select Difficulty</h2>

          <div className="game__difficulty-buttons">
            {difficulties.map(difficulty => (
              <button
                key={difficulty.level}
                className={`game__difficulty-button game__difficulty-button--${difficulty.level}`}
                onClick={() => newGame(difficulty)}
              >
                {difficulty.level}
              </button>
            ))}

            <button
              className="game__difficulty-button game__difficulty-button--main-menu"
              onClick={() => setScreen("main-menu")}
            >
              <svg className="game__difficulty-icon">
                <use href={`${icons}#arrow-left`} />
              </svg>
            </button>
          </div>
        </div>
      )}

      {game === "loading" && <LoadingScreen />}

      {(game === "playing" || game === "won" || game === "lost") && (
        <div className="game__cards">
          {pokemons.map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}

function getRandomPokemon(count: number): Pokemon[] {
  const ids: number[] = [];

  while (ids.length < count) {
    const id = Math.floor(Math.random() * pokemons.length);

    if (!ids.includes(id)) {
      ids.push(id);
    }
  }

  return ids.map(id => pokemons[id]);
}
