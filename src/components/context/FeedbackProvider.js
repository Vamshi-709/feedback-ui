import React, { createContext, useState, useEffect } from "react";

const FeedbackProvider = createContext();

export const FeedbackRating = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  useEffect(() => {
    fetchData();
  }, []);
  //fetch data from server
  const fetchData = async () => {
    const response = await fetch(`/feedback`);
    const data = await response.json();
    setFeedback(data);
    setLoading(false);
  };
  // add to feed back

  // item  will be added here

  const addFeedback = async (newFeedback) => {
    const response =await fetch('/feedback',{
      method: 'POST',
      headers :{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newFeedback),
    })
    const data = await response.JSON()
  
    setFeedback([data, ...feedback]);
  };
  // item will be delete here

  const deleteComponent = async (id) => {
    if (window.confirm("Are you sure to delete this ??")) {
      await fetch(`/feedback/${id}`,{method :'DELETE'})

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // updated in the feedback

  const updateFeedback =async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`,{
      method :'PUT',
      headers :{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(updItem)
    })
    const data = await response.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  // item will be updated here

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackProvider.Provider
      value={{
        feedback,
        loading,
        deleteComponent,
        addFeedback,
        editFeedback, //this one is  function
        feedbackEdit, // is object na
        updateFeedback,
      }}
    >
      {children}
    </FeedbackProvider.Provider>
  );
};
export default FeedbackProvider;
