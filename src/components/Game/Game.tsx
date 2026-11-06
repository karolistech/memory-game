import { useEffect, useState } from "react";

import type { Screen } from "@/types/screen";
import type { Difficulty, Face, Game } from "@/types/game";
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
  const [face, setFace] = useState<Face>("closed");
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    if (game !== "playing") return;

    if (face === "closed") {
      const timers = [
        setTimeout(() => setPokemons(pokemons => shuffle(pokemons)), 800),
        setTimeout(() => setFace("animating"), 1000)
      ];

      return () => timers.forEach(timer => clearTimeout(timer));
    }

    if (face === "animating") {
      const timer = setTimeout(() => setFace("open"), 700);

      return () => clearTimeout(timer);
    }
  }, [game, face]);

  function newGame(difficulty: Difficulty) {
    setDifficulty(difficulty);
    setGame("loading");

    const pokemons = getRandomPokemon(difficulty.cards);

    setPokemons(pokemons);
    setTimeout(() => setGame("playing"), 1000);
  }

  function selectCard(id: number) {
    setSelected([...selected, id]);
    setFace("closed");
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
        <>
          <header className="game__header">
            <button className="game__header-button" onClick={() => setScreen("main-menu")}>
              <svg className="game__header-icon">
                <use href={`${icons}#arrow-left`} />
              </svg>
            </button>

            <h1 className="game__title">Memory Game</h1>

            <button className="game__header-button">
              <svg className="game__header-icon">
                <use href={`${icons}#question-mark`} />
              </svg>
            </button>
          </header>

          <div className="game__cards">
            {pokemons.map(pokemon => (
              <Card key={pokemon.id} pokemon={pokemon} face={face} selectCard={selectCard} />
            ))}
          </div>
        </>
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

function shuffle(pokemons: Pokemon[]): Pokemon[] {
  const shuffled = [...pokemons];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
