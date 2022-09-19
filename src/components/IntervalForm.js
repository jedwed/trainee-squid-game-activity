import { useState } from "react";

/**
 * A form to set the time interval between light switches
 */
function IntervalForm({ setLightInterval }) {
  // TODO: Make the form change the time interval when button is clicked
  return (
    <>
      <form>
        <input type="number" min={1} />
        <button type="submit">Set Interval</button>
      </form>
    </>
  );
}

export default IntervalForm;
