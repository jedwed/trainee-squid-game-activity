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

/**
 * The traffic light component consisting of three colored circles
 */
function TrafficLight() {
  // The colors of a traffic light
  // Top light is the same color as the first index of lights
  // Middle light is the same color as the second index of lights
  // Bottom light is the same color as the third index of lights
  const [lights, setLights] = useState(["blue", "orange", "red"]);

  const [activeLight, setActiveLight] = useState(0);
  /*
 ===========================================================================================
  YOU WILL NOT NEED TO CREATE MORE COMPONENTS. 
  ALL THE TASKS CAN BE DONE BY MANIPULATING THE ABOVE TWO STATES
 ===========================================================================================
  TASK 1:
  Make the traffic lights switch between green->orange->red->green etc.
  at the press of the Change lights button.
  Do this by using setActiveLight.

  YOU DO NOT NEED TO CREATE YOUR OWN TRAFFIC LIGHT.
  ALL YOU HAVE TO DO IS EDIT THE activeLight STATE.

  If activeLight is 0, top light will turn on.
  If activeLight is 1, middle light will turn on.
  If activeLight is 2, bottom light will turn on.
 ===========================================================================================
  TASK 2:
  Edit the form so that it lets you change the colors of the top traffic light.
  Assume that the user always enter valid colour names.
  The colour of the traffic lights will automatically change depending on the lights state.
 ===========================================================================================
  BONUS TASK:
  Have the traffic lights automatically change every second (in the same order as task one).
 ===========================================================================================
  */
  
  // You can write your own functions here

  return (
    <div>
      {/* TODO TASK 1 EDIT BELOW BUTTON */}
      <button>Change lights</button>

      {/* TRAFFIC LIGHT DO NOT EDIT ANYTHING INSIDE BELOW DIV */}
      <div style={trafficLightContainer}>
        <Circle color={lights[0]} active={activeLight === 0} />
        <Circle color={lights[1]} active={activeLight === 1} />
        <Circle color={lights[2]} active={activeLight === 2} />
      </div>

      {/* TODO TASK 2 EDIT BELOW FORM */}
      <form>
        <input type="text" />
        <button>Change Top Colour</button>
      </form>
    </div>
  );
}

export default TrafficLight;
