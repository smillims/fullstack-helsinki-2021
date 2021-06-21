const FormPersons = ({ handleClick, handleNameChange, handlePhoneChange }) => {
  return (
    <form onSubmit={(event) => handleClick(event)}>
      <div>
        <label htmlFor="nameInput">name:</label>
        <input type="text" id="nameInput" onChange={(event) => handleNameChange(event)} />
      </div>
      <div>
        <label htmlFor="phoneInput">phone:</label>
        <input type="text" id="phoneInput" onChange={(event) => handlePhoneChange(event)} />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default FormPersons;
