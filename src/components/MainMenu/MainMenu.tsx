import type { Screen } from "@/types/screen";

import "./MainMenu.css";
import icons from "@/assets/icons/icons.svg";

type MainMenuProps = {
  setScreen: (screen: Screen) => void;
};

export default function MainMenu({ setScreen }: MainMenuProps) {
  return (
    <div className="main-menu">
      <h1 className="main-menu__title">
        <span className="main-menu__pokemon">Pokémon</span>
        <span className="main-menu__memory-game">Memory Game</span>
      </h1>

      <div className="main-menu__actions">
        <button className="main-menu__button" onClick={() => setScreen("game")}>
          <svg className="main-menu__icon">
            <use href={`${icons}#cards`} />
          </svg>

          <span className="main-menu__label">New Game</span>
        </button>

        <button className="main-menu__button" onClick={() => setScreen("collection")}>
          <svg className="main-menu__icon">
            <use href={`${icons}#collection`} />
          </svg>

          <span className="main-menu__label">Collection</span>
        </button>

        <button className="main-menu__button">
          <svg className="main-menu__icon">
            <use href={`${icons}#reset`} />
          </svg>

          <span className="main-menu__label">Reset</span>
        </button>
      </div>
    </div>
  );
}
