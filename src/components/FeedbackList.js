import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackProvider from "./context/FeedbackProvider";
import Spinner from "./share/Spinner";

function FeedbackList() {
  const { feedback, loading } = useContext(FeedbackProvider);

  if (!loading && (!feedback || feedback.length === 0)) {
    return <p> No Feedback Yet</p>;
  }
  return loading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))}
      <AnimatePresence />
    </div>
  );
}

export default FeedbackList;
