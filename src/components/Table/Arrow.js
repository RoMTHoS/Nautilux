function Arrow({ order, setOrder }) {
  function toggleChangeOrder() {
    setOrder(!order);
  }

  return (
    <div className="dropdown" onClick={toggleChangeOrder}>
      <div className={`select ${order && "selected-clicked"}`}>
        <div className={`caret ${order && "caret-rotate"}`}></div>
      </div>
    </div>
  );
}

export default Arrow;
