import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";

class ZendQuiz extends React.Component {
  state = {
    questionBank: [],
  };

  getQuestions = () => {
    quizService().then((question) =>
      this.setState({
        questionBank: question,
      })
    );
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="title">Zend Preparation</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
              />
            )
          )}
      </div>
    );
  }
}

ReactDOM.render(<ZendQuiz />, document.getElementById("root"));
