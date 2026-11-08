import { useState } from "react";

import type { Screen } from "@/types/screen";

import Guide from "@/components/Collection/Guide/Guide";

import "./Collection.css";
import icons from "@/assets/icons/icons.svg";

type CollectionProps = {
  setScreen: (screen: Screen) => void;
};

export default function Collection({ setScreen }: CollectionProps) {
  const [guide, setGuide] = useState<boolean>(false);

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
    </div>
  );
}
