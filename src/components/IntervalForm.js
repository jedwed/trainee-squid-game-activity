function IntervalForm() {
  const handleSubmit = () => {
    console.log("hi");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Set Interval</button>
      </form>
    </>
  );
}

export default IntervalForm;
