import React, { useState, useContext, useEffect } from "react";
import Rating from "./Rating";
import Button from "./share/Button";
import Card from "./share/Card";
import FeedbackProvider from "./context/FeedbackProvider";

function Form() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [massage, setMassage] = useState("");

  const { addFeedback, feedbackEdit,updateFeedback } = useContext(FeedbackProvider);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMassage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMassage("text must be 10 characters");
      setBtnDisabled(true);
    } else {
      setMassage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else{
        
        addFeedback(newFeedback);
      }

    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> how would you rate your service with us ??</h2>
        <Rating select={(rating) => setRating(rating)} />
        {/*  this is rating form*/}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="type your review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {massage && <div className="massage">{massage}</div>}
      </form>
    </Card>
  );
}
export default Form;
