import "./App.css";

import Hero from "./components/Hero/Hero";
import Story from "./components/Story/Story";
import Countdown from "./components/Countdown/Countdown";
import Schedule from "./components/Schedule/Schedule";
import Location from "./components/Location/Location";
import Details from "./components/Details/Details";
import RSVP from "./components/RSVP/RSVP";
import Final from "./components/Final/Final";

function App() {
  return (
    <div className="app">
      <Hero />
      <Story />
      <Countdown />
      <Schedule />
      <Location />
      <Details />
      <RSVP />
      <Final />
    </div>
  );
}

export default App;