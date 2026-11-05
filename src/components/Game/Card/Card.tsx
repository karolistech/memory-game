import type { Pokemon } from "@/types/pokemon";
import type { Face } from "@/types/game";

import icons from "@/assets/icons/icons.svg";
import cardBack from "@/assets/images/card-back.webp";

type CardProps = {
  pokemon: Pokemon;
  face: Face;
  selectCard: (id: number) => void;
};

export default function Card({ pokemon, face, selectCard }: CardProps) {
  return (
    <button
      className={getCardClassName(face)}
      onClick={() => selectCard(pokemon.id)}
      disabled={face !== "open"}
    >
      <div className="card__inner">
        <div className="card__face card__face--back">
          <img src={cardBack} alt="Pokémon card back" className="card__back-image" />
        </div>

        <div className="card__face card__face--front">
          <div className="card__content" data-type={pokemon.type}>
            <div className="card__header">
              <span className="card__name">{pokemon.name}</span>

              <svg className="card__type-icon">
                <use href={`${icons}#${pokemon.type}`} />
              </svg>
            </div>

            <div className="card__body">
              <img src={pokemon.image} alt={pokemon.name} className="card__front-image" />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function getCardClassName(face: Face): string {
  const base = "card";
  const open = (face === "animating" || face === "open") && "card--open";
  const interactive = face === "open" && "card--interactive";

  return [base, open, interactive].filter(Boolean).join(" ");
}
