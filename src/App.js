import { useState, useEffect } from "react";
import TrafficLight from "./components/TrafficLight";
import IntervalForm from "./components/IntervalForm";

function App() {
  // The time interval for switching lights in seconds
  const [lightInterval, setLightInterval] = useState(1);

  return (
    <>
      <IntervalForm setLightInterval={setLightInterval} />
      <TrafficLight lightInterval={lightInterval} />
    </>
  );
}

export default App;
