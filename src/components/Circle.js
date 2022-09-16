function Circle({ color }) {
  const circleStyle = {
    borderRadius: "50%",
    width: 100,
    height: 100,
    backgroundColor: color,
  };
  console.log(circleStyle);
  return <div style={circleStyle} />;
}

export default Circle;
