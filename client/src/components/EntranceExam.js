import React, {Component} from "react";
// import AddIngredients from "./AddIngredients";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import TestForm from "./TestForm";

export default class EntranceExam extends Component {
  constructor(props) {
    super(props);
    this.submitTest = this.submitTest.bind(this);   
  }
  submitTest(test) {
    console.log(test);
    this.props.submitTest(test);
    this.props.getTests();
    // this.props.history.push("/");
  }

  render() {
    return <TestForm submitTest={this.props.submitTest} test={{}} />;
  
  }
}
