import { useState, useEffect } from "react";

function App() {
  // A state to store the colour of the light
  const [isRedLight, setIsRedLight] = useState(false);

  document.body.style.backgroundColor = isRedLight ? "red" : "green";
  // // A useEffect that constantly listens for changes to isRedLight
  // useEffect(() => {
  //   document.body.style.backgroundColor = isRedLight ? "red" : "green";
  // }, [isRedLight]);

  const changeLight = () => {
    setIsRedLight(!isRedLight);
  };

  return (
    <div>
      <button onClick={changeLight}>Change light</button>
    </div>
  );
}

export default App;
