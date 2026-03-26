import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import MeaningOfMarriage from "./components/MeaningOfMarriage";
import OurStory from "./components/OurStory";
import Program from "./components/Program";
import RSVP from "./components/RSVP";
import ScriptureReflections from "./components/ScriptureReflections";
import WeddingDetails from "./components/WeddingDetails";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurStory />
      <MeaningOfMarriage />
      <ScriptureReflections />
      <WeddingDetails />
      <Program />
      <RSVP />
      <Gallery />
    </main>
  );
}
