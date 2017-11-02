import React, {Component} from "react";
// import AddIngredients from "./AddIngredients";
// import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import TestForm from "./TestForm";

export default class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.addTest = this.addTest.bind(this);   
  }

  addTest(test) {
    console.log(test);
    this.props.addTest(test);
    this.props.loadTests();
    //this.props.history.push("/");
  }

  render() {
    return <TestForm addTest={this.addTest} test={{}} />;
  
  }
}
