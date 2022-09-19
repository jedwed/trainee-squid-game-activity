/**
 * The circle for the traffic light
 * It is given a color prop, and an active prop
 * If 'active' is true, display the color, otherwise, display black
 */
function Circle({ color, active }) {
  const circleStyle = {
    borderRadius: "50%",
    width: 100,
    height: 100,
    backgroundColor: active ? color : "black",
  };

  return <div style={circleStyle} />;
}

export default Circle;
