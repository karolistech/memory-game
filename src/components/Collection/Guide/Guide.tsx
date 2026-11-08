import "./Guide.css";

type GuideProps = {
  closeGuide: () => void;
};

export default function Guide({ closeGuide }: GuideProps) {
  return (
    <>
      <div className="guide__backdrop" />

      <div className="guide">
        <h2 className="guide__title">Collection Guide</h2>

        <p className="guide__introduction">
          Welcome to your Pokémon Collection! Track your progress, revisit
          Pokémon you have discovered, and work toward completing the Pokédex.
          Can you catch 'em all?
        </p>

        <ol className="guide__steps">
          <li className="guide__step">
            <h3 className="guide__step-title">Discover Pokémon</h3>

            <p className="guide__step-text">
              Play the Memory Game to discover new Pokémon. Each Pokémon you
              select for the first time is added to your Collection.
            </p>
          </li>

          <li className="guide__step">
            <h3 className="guide__step-title">Explore Collection</h3>

            <p className="guide__step-text">
              Browse the Pokédex to explore Pokémon from all generations. Select
              a Pokémon card to view its details and learn more about it.
            </p>
          </li>

          <li className="guide__step">
            <h3 className="guide__step-title">Manage Collection</h3>

            <p className="guide__step-text">
              Use the filter options to view only collected Pokémon, adjust the
              number of cards displayed per page, and track your progress.
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
