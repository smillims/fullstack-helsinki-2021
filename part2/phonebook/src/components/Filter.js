const Filter = ({ filterPhonebook }) => {
  return (
    <div>
      <label htmlFor="filterInput">filter shown with:</label>
      <input type="text" id="filterInput" onInput={(event) => filterPhonebook(event)} />
    </div>
  );
};

export default Filter;
