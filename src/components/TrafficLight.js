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

// The colors of a traffic light
const lights = ["green", "orange", "red"];

/**
 * The traffic light component consisting of three colored circles
 */
function TrafficLight({ lightInterval }) {
  const [activeLight, setActiveLight] = useState(0);
  return (
    <div style={trafficLightContainer}>
      <Circle color="red" active={lights[activeLight] === "red"} />
      <Circle color="orange" active={lights[activeLight] === "orange"} />
      <Circle color="green" active={lights[activeLight] === "green"} />
    </div>
  );
}

export default TrafficLight;
