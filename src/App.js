import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStart from "./components/FeedbackStart";
import Form from "./components/Form";
import AboutLink from "./components/AboutLink";
import { FeedbackRating } from "./components/context/FeedbackProvider";
import Aboutpage from "./components/pages/Aboutpage";

function App() {
  return (
    <FeedbackRating>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Form />
                  <FeedbackStart />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<Aboutpage />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedbackRating>
  );
}

export default App;
