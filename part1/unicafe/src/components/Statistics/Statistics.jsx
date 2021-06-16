import style from "./Statistics.module.css";

import TemplateText from "../TemplateText";
import SumOfRating from "../SumOfRating";
import CalculationOfRating from "../CalculationOfRating";

function Statistics({ rating, sumAllRating, checkAverage, checkPositive }) {
  if (sumAllRating() === "" && checkAverage() === "" && checkPositive() === "") {
    return (
      <>
        <TemplateText text="statistics" />
        <p className={style.feedback}>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <TemplateText text="statistics" />
      <SumOfRating rating={rating} />
      <CalculationOfRating calculationFunc={sumAllRating} text="all" />
      <CalculationOfRating calculationFunc={checkAverage} text="average" />
      <CalculationOfRating calculationFunc={checkPositive} text="positive" />
    </>
  );
}

export default Statistics;
