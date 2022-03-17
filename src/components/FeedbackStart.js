import React, { useContext } from "react";
import FeedbackProvider from "./context/FeedbackProvider";

function FeedbackStart() {
  const { feedback } = useContext(FeedbackProvider);
  // Caluculate Avg  rating
  let avarage =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  // console.log(avarage)
  avarage = avarage.toFixed(2).replace(/[. ,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Feedback Review</h4>
      <h4>Avarage rating {isNaN(avarage) ? 0 : avarage}</h4>
    </div>
  );
}

export default FeedbackStart;
