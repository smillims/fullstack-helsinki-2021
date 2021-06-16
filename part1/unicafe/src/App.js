import React from "react";
import style from "./App.module.css";

import useRating from "./useRating";
import TemplateText from "./components/TemplateText";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const { rating, sumAllRating, checkAverage, checkPositive } = useRating();
  return (
    <div className={style.container}>
      <TemplateText text="give feedback" />
      <Button rating={rating} />
      <Statistics rating={rating} sumAllRating={sumAllRating} checkAverage={checkAverage} checkPositive={checkPositive} />
    </div>
  );
};

export default App;
