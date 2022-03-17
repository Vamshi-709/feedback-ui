import Card from "./share/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackProvider from "./context/FeedbackProvider";

function FeedbackItem({ item }) {
  const { deleteComponent, editFeedback } = useContext(FeedbackProvider);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteComponent(item.id)} className="close">
        <FaTimes color="red" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="blue" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
