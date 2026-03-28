import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import MeaningOfMarriage from "./components/MeaningOfMarriage";
import OurPrayer from "./components/OurPrayer";
import OurStory from "./components/OurStory";
import Program from "./components/Program";
import RSVP from "./components/RSVP";
import ScriptureReflections from "./components/ScriptureReflections";
import WeddingDetails from "./components/WeddingDetails";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <OurPrayer />
      <WeddingDetails />
      <Program />
      {/* <OurStory /> */}
      {/* <MeaningOfMarriage /> */}
      <ScriptureReflections />
      <RSVP />
      <Gallery />
    </main>
  );
}
