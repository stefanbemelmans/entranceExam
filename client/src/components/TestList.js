import React, {Component} from "react";
// import Link from "react-router-dom";
import Test from "../components/Test";
import PropTypes from "prop-types";

export default class TestList extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.getTests();
  }
  render() {   
    const tests = this.props.tests.map(function (test, i) {
    
      return (
        <Test key={i} test={test} />
      );  
    } 
     
    ); 
   
  
    return (
      <div>
        <div className="recListHeader">
          <h1> Tests List </h1>
         
        </div>
        <div className="recipeList">
          
          {tests}
          
        </div>
      </div>
    );
  }
}

TestList.propTypes = {
  tests: PropTypes.array
}; 


