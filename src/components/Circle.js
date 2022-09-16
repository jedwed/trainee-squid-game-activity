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
