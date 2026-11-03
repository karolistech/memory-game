import { useScreen } from "@/hooks/useScreen";

import MainMenu from "@/components/MainMenu/MainMenu";

import "./App.css";

export default function App() {
  const { screen, setScreen } = useScreen();

  return (
    <div className="app">
      {screen === "main-menu" && <MainMenu setScreen={setScreen} />}

      {screen === "game" && <div>Game</div>}

      {screen === "collection" && <div>Collection</div>}
    </div>
  );
}
