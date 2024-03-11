import { MainIntro } from "./components/MainIntro";
import { NavBar } from "./components/NavBar";
import { ShortenLinkBar } from "./components/ShortenLinkBar";
import { AdvancedStatistics } from "./components/AdvancedStatistics";

function App() {
  return (
    <>
      <NavBar />
      <MainIntro />
      <ShortenLinkBar />
      <AdvancedStatistics />
    </>
  );
}

export default App;
