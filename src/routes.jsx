import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizQuestion from "./components/Quiz/QuizQuestion";
import EmailForm from "./components/Email/EmailForm";
import ThankYou from "./components/ThankYou/ThankYou";

const Routing = () => (
  <Router>
    <Routes>
      <Route path="/quiz/:id" component={QuizQuestion} />
      <Route path="/email" component={EmailForm} />
      <Route path="/thank-you" component={ThankYou} />
    </Routes>
  </Router>
);

export default Routing;
