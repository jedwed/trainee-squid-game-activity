import { useState } from "react";

function IntervalForm({ setLightInterval }) {
  const [timeInput, setTimeInput] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLightInterval(timeInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={timeInput}
          onChange={(e) => setTimeInput(e.target.value)}
        />
        <button type="submit">Set Interval</button>
      </form>
    </>
  );
}

export default IntervalForm;
