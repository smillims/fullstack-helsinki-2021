import style from "./SumOfRating.module.css";

function SumOfRating({ rating }) {
  return (
    <table className={style.statiscticText}>
      <tbody>
        {rating.map((item) => (
          <tr key={item.textQuality}>
            <td>{item.textQuality}</td>
            <td>{item.quality}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SumOfRating;
