import { useState } from "react";

import type { Screen } from "@/types/screen";

import pokemons from "@/data/pokemons.json";

import Guide from "@/components/Collection/Guide/Guide";
import Card from "@/components/Collection/Card/Card";

import "./Collection.css";
import icons from "@/assets/icons/icons.svg";

type CollectionProps = {
  setScreen: (screen: Screen) => void;
};

export default function Collection({ setScreen }: CollectionProps) {
  const [guide, setGuide] = useState<boolean>(false);

  // const ids = pokemons.map(pokemon => pokemon.id);
  const ids = Array.from({ length: 20 }, (_, i) => i + 1);

  function openGuide() {
    setGuide(true);
  }

  function closeGuide() {
    setGuide(false);
  }

  return (
    <div className="collection">
      <header className="collection__header">
        <button className="collection__header-button" onClick={() => setScreen("main-menu")}>
          <svg className="collection__header-icon">
            <use href={`${icons}#arrow-left`} />
          </svg>
        </button>

        <h1 className="collection__title">Collection</h1>

        <button className="collection__header-button" onClick={openGuide}>
          <svg className="collection__header-icon">
            <use href={`${icons}#question-mark`} />
          </svg>
        </button>
      </header>

      {guide && <Guide closeGuide={closeGuide} />}

      <div className="collection__cards">
        {ids.map(id => (
          // <Card key={id} />
          <Card key={id} pokemon={pokemons[id - 1]} />
        ))}
      </div>
    </div>
  );
}
