import { useScreen } from "@/hooks/useScreen";

import "./App.css";

export default function App() {
  const { screen, setScreen } = useScreen();

  return (
    <div className="app">
      {screen === "main-menu" && <div>Main Menu</div>}

      {screen === "game" && <div>Game</div>}

      {screen === "collection" && <div>Collection</div>}
    </div>
  );
}
