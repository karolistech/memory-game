import { type MouseEvent, useRef } from "react";

import type { Pokemon } from "@/types/pokemon";

import "./CardModal.css";
import icons from "@/assets/icons/icons.svg";

type CardModalProps = {
  pokemon: Pokemon;
  closeCardModal: () => void;
};

export default function CardModal({ pokemon, closeCardModal }: CardModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const tiltRange = 40;

  function openCardModal(dialog: HTMLDialogElement | null) {
    if (dialog) dialog.showModal();
  }

  function handleCardTilt(e: MouseEvent) {
    const card = cardRef.current;

    if (card === null) return;

    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - y) * tiltRange;
    const rotateY = (x - 0.5) * tiltRange;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function resetCardTilt() {
    const card = cardRef.current;

    if (card === null) return;

    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  return (
    <dialog ref={openCardModal} className="card-modal" onClose={closeCardModal}>
      <div className="card-modal__content" data-type={pokemon.type}>
        <div className="card" onMouseMove={handleCardTilt} onMouseLeave={resetCardTilt}>
          <div ref={cardRef} className="card__face">
            <div className="card__content">
              <div className="card__header">
                <span className="card__name">{pokemon.name}</span>

                <svg className="card__type-icon">
                  <use href={`${icons}#${pokemon.type}`} />
                </svg>
              </div>

              <div className="card__body">
                <img src={pokemon.image} alt={pokemon.name} className="card__image" />
              </div>
            </div>
          </div>
        </div>

        <div className="card-details">
          Card Details
        </div>
      </div>

      <button className="card-modal__close-button" onClick={closeCardModal}>
        <svg className="card-modal__close-icon">
          <use href={`${icons}#arrow-left`} />
        </svg>
      </button>
    </dialog>
  );
}
