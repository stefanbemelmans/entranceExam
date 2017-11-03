import React, {Component} from "react";
// import AddIngredients from "./AddIngredients";
// import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import TestForm from "./TestForm";

export default class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.subTest = this.subTest.bind(this);   
  }

  addTest(test) {
    console.log(test);
    this.props.subTest(test);
    this.props.getTests();
    //this.props.history.push("/");
  }

  render() {
    return <TestForm subTest={this.subTest} test={{}} />;
  
  }
}
