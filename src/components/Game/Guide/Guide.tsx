import "./Guide.css";

type GuideProps = {
  closeGuide: () => void;
};

export default function Guide({ closeGuide }: GuideProps) {
  return (
    <>
      <div className="guide__backdrop" />

      <div className="guide">
        <h2 className="guide__title">Game Guide</h2>

        <p className="guide__introduction">
          Welcome to the Pokémon Memory Game! Your goal is to select every Pokémon
          card without picking the same one twice. Test your memory and try to
          beat all three difficulty levels!
        </p>

        <ol className="guide__steps">
          <li className="guide__step">
            <h3 className="guide__step-title">Pick a Card</h3>

            <p className="guide__step-text">
              Click a card to select a Pokémon. After each selection, all cards
              flip face-down and shuffle.
            </p>
          </li>

          <li className="guide__step">
            <h3 className="guide__step-title">Remember Picks</h3>

            <p className="guide__step-text">
              Keep track of your Pokémon. If you pick the same one twice, the game
              will end!
            </p>
          </li>

          <li className="guide__step">
            <h3 className="guide__step-title">Complete the Level</h3>

            <p className="guide__step-text">
              Select every Pokémon once to complete the level. You earn one point
              for each unique pick.
            </p>
          </li>

          <li className="guide__step guide__step--wide">
            <h3 className="guide__step-title">Level Up</h3>

            <p className="guide__step-text">
              Complete a level to advance to the next difficulty. Each level adds
              more cards and a bigger challenge:
            </p>

            <div className="guide__levels">
              <span>Easy: 4 cards</span>
              <span>Medium: 8 cards</span>
              <span>Hard: 12 cards</span>
            </div>
          </li>

          <li className="guide__step">
            <h3 className="guide__step-title">Build Collection</h3>

            <p className="guide__step-text">
              Every unique Pokémon you select is added to your Collection. Keep
              playing to discover new Pokémon and improve your best score!
            </p>
          </li>
        </ol>

        <button className="guide__button" onClick={closeGuide}>
          Got It!
        </button>
      </div>
    </>
  );
}
