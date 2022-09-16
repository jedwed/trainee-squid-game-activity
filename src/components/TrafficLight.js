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

function TrafficLight() {
  return (
    <div style={trafficLightContainer}>
      <Circle color="red" />
      <Circle color="orange" />
      <Circle color="green" />
    </div>
  );
}

export default TrafficLight;
