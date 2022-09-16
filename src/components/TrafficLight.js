import { useState, useEffect } from "react";
import Circle from "./Circle";

const trafficLightContainer = {
  backgroundColor: "gray",
  height: 400,
  width: 150,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  alignItems: "center",
  justifyContent: "center",
};

function TrafficLight({ lightInterval }) {
  const [activeLight, setActiveLight] = useState("green");
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeLight === "red") {
        setActiveLight("green");
      } else if (activeLight === "green") {
        setActiveLight("orange");
      } else {
        setActiveLight("red");
      }
    }, lightInterval);
    return () => clearInterval(interval);
  }, [activeLight]);
  // const [redActive, setRedActive] = useState(false);
  // const [orangeActive, setOrangeActive] = useState(false);
  // const [greenActive, setGreenActive] = useState(true);
  return (
    <div style={trafficLightContainer}>
      <Circle color="red" active={activeLight === "red"} />
      <Circle color="orange" active={activeLight === "orange"} />
      <Circle color="green" active={activeLight === "green"} />
    </div>
  );
}

export default TrafficLight;
