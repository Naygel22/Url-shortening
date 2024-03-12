import { MainIntro } from "./components/MainIntro";
import { NavBar } from "./components/NavBar";
import { ShortenLinkBar } from "./components/ShortenLinkBar";
import { AdvancedStatistics } from "./components/AdvancedStatistics";
import { BoostLinks } from "./components/BoostLinks";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <MainIntro />
      <ShortenLinkBar />
      <AdvancedStatistics />
      <BoostLinks />
      <Footer />
    </>
  );
}

export default App;
