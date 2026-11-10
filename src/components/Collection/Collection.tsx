import { type ChangeEvent, useState } from "react";

import type { Screen } from "@/types/screen";
import type { Filter, PageSize } from "@/types/collection";

import { useCollection } from "@/hooks/useCollection";

import pokemons from "@/data/pokemons.json";

import Guide from "@/components/Collection/Guide/Guide";
import Card from "@/components/Collection/Card/Card";

import "./Collection.css";
import icons from "@/assets/icons/icons.svg";

type CollectionProps = {
  setScreen: (screen: Screen) => void;
};

export default function Collection({ setScreen }: CollectionProps) {
  const { collection, getPokemon } = useCollection();

  const [filter, setFilter] = useState<Filter>("all");
  const [pageSize, setPageSize] = useState<PageSize>(20);
  const [guide, setGuide] = useState<boolean>(false);

  // const ids = pokemons.map(pokemon => pokemon.id);
  const ids = Array.from({ length: 20 }, (_, i) => i + 1);

  const filtered = filter === "all" ? ids : ids.filter(id => collection.includes(id));

  function changeFilter(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;

    if (value === "all" || value === "collected") {
      setFilter(value);
    }
  }

  function changePageSize(e: ChangeEvent<HTMLSelectElement>) {
    const value = Number(e.target.value);

    if (value === 20 || value === 40 || value === 60 || value === 100) {
      setPageSize(value);
    }
  }

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

      <div className="collection__toolbar">
        <div className="collection__filter">
          <select className="collection__select" value={filter} onChange={changeFilter}>
            <option value="all">All</option>
            <option value="collected">Collected</option>
          </select>

          <svg className="collection__select-icon">
            <use href={`${icons}#chevron`} />
          </svg>
        </div>

        <div className="collection__counter">
          <span>Pokémon Collected</span>

          <span className="collection__counter-value">
            {collection.length} / {ids.length}
          </span>
        </div>

        <div className="collection__page-size">
          <select className="collection__select" value={pageSize} onChange={changePageSize}>
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={60}>60</option>
            <option value={100}>100</option>
          </select>

          <svg className="collection__select-icon">
            <use href={`${icons}#chevron`} />
          </svg>
        </div>
      </div>

      <div className="collection__cards">
        {filtered.map(id => (
          // <Card key={id} />
          <Card key={id} pokemon={getPokemon(id)} />
        ))}
      </div>
    </div>
  );
}
