import { useScreen } from "@/hooks/useScreen";

import MainMenu from "@/components/MainMenu/MainMenu";
import Game from "@/components/Game/Game";

import "./App.css";

export default function App() {
  const { screen, setScreen } = useScreen();

  return (
    <div className="app">
      {screen === "main-menu" && <MainMenu setScreen={setScreen} />}

      {screen === "game" && <Game setScreen={setScreen} />}

      {screen === "collection" && <div>Collection</div>}
    </div>
  );
}
