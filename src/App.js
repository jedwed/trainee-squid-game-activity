import { useState, useEffect } from "react";
import TrafficLight from "./components/TrafficLight";
import IntervalForm from "./components/IntervalForm";

function App() {
  // A state to store the colour of the light
  // const [isRedLight, setIsRedLight] = useState(false);

  // document.body.style.backgroundColor = isRedLight ? "red" : "green";
  // // A useEffect that constantly listens for changes to isRedLight
  // useEffect(() => {
  //   document.body.style.backgroundColor = isRedLight ? "red" : "green";
  // }, [isRedLight]);

  // const changeLight = () => {
  //   setIsRedLight(!isRedLight);
  // };
  const [lightInterval, setLightInterval] = useState(5000);

  return (
    <>
      <IntervalForm setLightInterval={setLightInterval} />
      <TrafficLight lightInterval={lightInterval} />
    </>
  );
}

export default App;
