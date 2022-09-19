import { useState } from "react";

function IntervalForm({ setLightInterval }) {
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
