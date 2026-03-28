import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import OurPrayer from "./components/OurPrayer";
import Program from "./components/Program";
import RSVP from "./components/RSVP";
import ScriptureReflections from "./components/ScriptureReflections";
import WeddingDetails from "./components/WeddingDetails";
import { siteName, siteUrl } from "./lib/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Raymond + Neoline Wedding Ceremony",
    description:
      "A covenant celebration before God. Join us for worship, prayer, and thanksgiving.",
    startDate: "2026-05-09T11:00:00+03:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: [`${siteUrl}/assets/2g5a3446.jpg.jpeg`],
    url: siteUrl,
    location: {
      "@type": "Place",
      name: "Church of the Resurrection, Bugolobi COU",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kampala",
        addressCountry: "UG",
      },
    },
    organizer: [
      {
        "@type": "Person",
        name: "Raymond Muhwezi",
      },
      {
        "@type": "Person",
        name: "Neoline Nabirye",
      },
    ],
    subEvent: [
      {
        "@type": "Event",
        name: "Wedding Reception",
        location: {
          "@type": "Place",
          name: "Grandville Manor, Kampala",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kampala",
            addressCountry: "UG",
          },
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Intro />
      <OurPrayer />
      <WeddingDetails />
      <Program />
      <ScriptureReflections />
      <RSVP />
      <Gallery />
    </main>
  );
}
