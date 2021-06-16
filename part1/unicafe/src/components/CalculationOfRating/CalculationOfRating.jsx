function CalculationOfRating({ calculationFunc, text }) {
  return (
    <table>
      <tbody>
        <td>{text}</td>
        <td>{calculationFunc()}</td>
      </tbody>
    </table>
  );
}

export default CalculationOfRating;
