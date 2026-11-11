import type { Pokemon } from "@/types/pokemon";

import "./CardModal.css";
import icons from "@/assets/icons/icons.svg";

type CardModalProps = {
  pokemon: Pokemon;
  closeCardModal: () => void;
};

export default function CardModal({ pokemon, closeCardModal }: CardModalProps) {
  function openCardModal(dialog: HTMLDialogElement | null) {
    if (dialog) dialog.showModal();
  }

  return (
    <dialog ref={openCardModal} className="card-modal" onClose={closeCardModal}>
      <div className="card-modal__content" data-type={pokemon.type}>
        <div className="card">
          <div className="card__face">
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
