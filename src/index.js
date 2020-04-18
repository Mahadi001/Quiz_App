import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

class ZendQuiz extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title">Zend Preparation</div>
      </div>
    );
  }
}

ReactDOM.render(<ZendQuiz />, document.getElementById("root"));
